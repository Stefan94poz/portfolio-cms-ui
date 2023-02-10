export interface ProjectI {
  id: string;
  name: string;
  stack: string[];
  packages: string[];
  github: string;
  description: string;
  devId: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostI {
  id: string;
  title: string;
  content: string;
  slug: string;
  published: boolean;
  authorId: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}
