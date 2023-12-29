export interface Job {
  id: number | string;
  title: string;
  company: string;
  locations: { name: string }[];
  remote: boolean;
  contents: string;
  published_date: string;
  categories: string[];
  url: string;
}

export interface QueryParams {
  page: number;
  title: string;
  category?: string[];
  location?: string;
}
