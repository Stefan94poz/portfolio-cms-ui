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

export interface ParamI {
  name: string;
  value: any;
}

export type SubpageProps = {
  children: string | JSX.Element | JSX.Element[];
  title: string;
  description: string;
};
