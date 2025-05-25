export interface Website {
  domain?: string;
  subdomain: string;
  theme?: string;
  custom_css?: string;
  is_active?: boolean;
  ssl_enabled?: boolean;
  created_at?: Date;
  updated_at?: Date;
}