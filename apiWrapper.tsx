import {
  OwnedRepoResultsDataWrapper,
  OwnedRepository,
} from "./types/OwnedRepoResults";
import { SearchResults, SearchResultsDataWrapper } from "./types/SearchResults";
import { PullRequest } from "./types/PullRequest";
import { RepositoryPullRequests } from "./types/RepoPullRequests";
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

const fetchRepoContributors = async (
  accessToken: string,
  owner: string,
  repo: string
) => {
  let url = `https://api.github.com/repos/${owner}/${repo}/contributors`;
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

const fetchRepoPullRequests = async (
  accessToken: string,
  owner: string,
  repo: string
) => {
  const PULL_REQUEST_QUERY = `
  {
    repository(owner: "**OWNER**", name: "**REPO**") {
      pullRequests(first: 20) {
        nodes {
          number
          id
          title
          repository {
            nameWithOwner
            description
          }
          createdAt
          mergedAt
          changedFiles
          additions
          deletions
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
  }
`;
  const searchData: RepositoryPullRequests = await graphql(
    PULL_REQUEST_QUERY.replace("**OWNER**", owner).replace("**REPO**", repo),
    {
      headers: {
        authorization: `token ${accessToken}`,
      },
    }
  );
  const search: PullRequest[] | undefined =
    searchData.repository?.pullRequests?.nodes;
  return search;
};

const fetchUserMaintainedRepositories = async (
  accessToken: string,
  login: string
) => {
  const USER_REPOS_QUERY = `
  fragment Repos on RepositoryConnection {
    nodes {
      # Metadata
      name
      url
      description
  
      # Dates
        
      # Counts
      stargazers {
        totalCount
      }
      forkCount
      defaultBranchRef {
        commits: target {
          ... on Commit {
            history(first: 1) {
              totalCount
            }
          }
        }
      }
     
      repositoryTopics(first: 10) {
        nodes {
          topic {
            name
            stargazers {
              totalCount
            }
            viewerHasStarred
          }
          url
        }
      }
    }
  }
  
  {
    viewer {
      original: repositories(
        first: 100
        ownerAffiliations: OWNER
        privacy: PUBLIC
        isFork: false
        isLocked: false
        orderBy: { field: UPDATED_AT, direction: DESC }
      ) {
        ...Repos
      }
    }
  }  
`;
  const searchData: OwnedRepoResultsDataWrapper = await graphql(
    USER_REPOS_QUERY,
    {
      headers: {
        authorization: `token ${accessToken}`,
      },
    }
  );
  const ownedRepos: OwnedRepository[] | undefined =
    searchData.viewer?.original.nodes;
  return ownedRepos;
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
  fetchRepoContributors,
  fetchPullRequestDetails,
  fetchRepoPullRequests,
  fetchUserDetails,
  fetchUserMaintainedRepositories,
  fetchUserPullRequests,
};
