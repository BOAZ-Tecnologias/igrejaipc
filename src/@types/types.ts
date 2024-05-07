export type Option = {
  title: string;
  url: string;
  newTab?: boolean;
};

export type Iinfo = {
  id: number;
  title: string;
  description: string;
  options: Option[];
};

export type IFAQ = {
  question: string;
  response: string | string[];
};
