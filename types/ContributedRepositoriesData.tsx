export interface ContributedRepositoriesData {
  viewer: Viewer;
}

export interface Viewer {
  repositoriesContributedTo: RepositoriesContributedTo;
}

export interface RepositoriesContributedTo {
  nodes: RepositoriesContributedToNode[];
}

export interface RepositoriesContributedToNode {
  name: string;
  url: string;
  description: string;
  stargazers: Stargazers;
  forkCount: number;
  defaultBranchRef: DefaultBranchRef;
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
