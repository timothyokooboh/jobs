export interface Job {
  id: number | string;
  title: string;
  company: string;
  locations: { name: string }[];
  remote: boolean;
  contents: string;
  published_date: string;
  categories: { name: string }[];
  levels: { name: string }[];
  url: string;
}

export interface QueryParams {
  page: number;
  category?: string[];
  location?: string;
}
