export interface PREntry {
  node: PullRequest;
}

export interface PullRequest {
  number: number;
  id?: string;
  title: string;
  repository: Repository;
  createdAt: Date;
  mergedAt: Date;
  url: string;
  changedFiles: number;
  additions: number;
  deletions: number;
  state: string;
  author: Author;
}

export interface Author {
  avatarUrl: string;
  login: string;
  url: string;
}

export interface Repository {
  nameWithOwner: string;
  description?: string;
}
