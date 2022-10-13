import { Author } from "./Author";
import { Repository } from "./Repository";

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
