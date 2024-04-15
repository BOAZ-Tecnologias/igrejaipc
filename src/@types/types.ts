export type Option = {
  title: string;
  url: string;
};

export type Iinfo = {
  id: number;
  title: string;
  description: string;
  options: Option[];
};

export type IFAQ = {
  question: string;
  response: string;
};
