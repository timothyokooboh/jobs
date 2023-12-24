export interface Job {
  slug: string;
  title: string;
  description: string;
  company_name: string;
  url: string;
  remote: boolean;
  tags: string[];
  location: string;
  created_at: number;
}
