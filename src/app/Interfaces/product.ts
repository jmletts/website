export interface Product {
  name: string;
  description?: string;
  price: number;
  cost_price?: number;
  sku?: string;
  stock?: number;
  min_stock?: number;
  brand?: string;
  weight?: number;
  dimensions?: string;
  is_active?: boolean;
}