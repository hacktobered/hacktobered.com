import { PullRequest } from "./PullRequest";

export interface RepositoryPullRequests {
  repository: DataRepository;
}

export interface PullRequestsWithNodes {
  nodes: PullRequest[];
}

export interface DataRepository {
  pullRequests: PullRequestsWithNodes;
}
