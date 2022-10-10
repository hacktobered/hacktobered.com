import { SearchResults, SearchResultsDataWrapper } from "./types/SearchResults";
import { PullRequest } from "./types/PREntry";
import { graphql } from "@octokit/graphql";

const fetchUserDetails = async (accessToken: string) => {
  let url = `https://api.github.com/user`;
  return fetch(url, {
    method: "get",
    headers: {
      Authorization: `token ${accessToken}`,
    },
  }).then((response) => {
    return response.json();
  });
};
const fetchUserPullRequests = async (accessToken: string, login: string) => {
  const PULL_REQUEST_QUERY = `
  {
    search(
      query: "is:merged is:pr is:public archived:false author:***** -user:*****"
      type: ISSUE
      first: 10
    ) {
      issueCount
      edges {
        node {
          ... on PullRequest {
            number
            title
            repository {
              nameWithOwner
              description
            }
            createdAt
            mergedAt
            url
            state
          }
        }
      }
    }
  }
`;
  const searchData: SearchResultsDataWrapper = await graphql(
    PULL_REQUEST_QUERY.replace("*****", login),
    {
      headers: {
        authorization: `token ${accessToken}`,
      },
    }
  );
  const search: SearchResults | undefined = searchData.search;
  return search;
};
const fetchPullRequestDetails = async (
  accessToken: string,
  owner: string,
  repo: string,
  prId: string
) => {
  const PULL_REQUEST_QUERY = `
  {
    repository(owner: "**OWNER**", name: "**REPO**") {
      pullRequest(number: **PR_ID**) {
        number
        id
        title
        repository {
          nameWithOwner
          description
        }
        createdAt
        mergedAt
        url
        state
        author {
          avatarUrl
          login
          url
        }
      }
    }
  }
`;
  const searchData: any = await graphql(
    PULL_REQUEST_QUERY.replace("**OWNER**", owner)
      .replace("**REPO**", repo)
      .replace("**PR_ID**", prId),
    {
      headers: {
        authorization: `token ${accessToken}`,
      },
    }
  );
  const search: PullRequest | undefined = searchData?.repository?.pullRequest;

  return search;
};

export const apiWrapper = {
  fetchPullRequestDetails,
  fetchUserDetails,
  fetchUserPullRequests,
};
