export interface Data {
  viewer: Viewer;
}

export interface Viewer {
  original: Original;
}

export interface Original {
  nodes: Repository[];
}

export interface Repository {
  name: string;
  url: string;
  description: null | string;
  stargazers: Stargazers;
  forkCount: number;
  defaultBranchRef: DefaultBranchRef | null;
  repositoryTopics: RepositoryTopics;
}

export interface DefaultBranchRef {
  commits: Commits;
}

export interface Commits {
  history: Stargazers;
}

export interface Stargazers {
  totalCount: number;
}

export interface RepositoryTopics {
  nodes: RepositoryTopicsNode[];
}

export interface RepositoryTopicsNode {
  topic: Topic;
  url: string;
}

export interface Topic {
  name: string;
  stargazers: Stargazers;
  viewerHasStarred: boolean;
}

export type OwnedRepoResultsDataWrapper = {
  viewer: Viewer | undefined;
};
