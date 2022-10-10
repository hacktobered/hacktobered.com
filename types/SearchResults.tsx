import { PREntry } from "./PREntry";

export type SearchResults = {
  issueCount: number;
  edges: PREntry[];
};

export type SearchResultsDataWrapper = {
  search: SearchResults | undefined;
};
