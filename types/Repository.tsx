export interface Repository {
  nameWithOwner: string;
  description?: string;
  repositoryTopics: RepositoryTopics;
}

export interface RepositoryTopics {
  edges: RepositoryTopicsEdge[];
}

export interface RepositoryTopicsEdge {
  node: FluffyNode;
}

export interface FluffyNode {
  topic: NodeElement;
}

export interface Labels {
  nodes: NodeElement[];
}

export interface NodeElement {
  name: string;
}
