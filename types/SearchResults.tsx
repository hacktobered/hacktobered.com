import { PullRequestEntry } from "./PullRequestEntry";

export type SearchResults = {
  issueCount: number;
  edges: PullRequestEntry[];
};

export type SearchResultsDataWrapper = {
  search: SearchResults | undefined;
};
