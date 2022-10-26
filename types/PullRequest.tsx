import { Labels, Repository } from "./Repository";
import { Author } from "./Author";

export interface PullRequest {
  number: number;
  id?: string;
  title: string;
  repository: Repository;
  createdAt: Date;
  mergedAt: Date;
  labels: Labels;
  url: string;
  changedFiles: number;
  additions: number;
  deletions: number;
  state: string;
  author: Author;
}
