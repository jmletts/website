export interface Category {
  name: string;
  description?: string;
  parent_id?: number | null;
  is_active?: boolean;
}