// TypeScript-типы сущности Product — используются в Card, Table примерах
import type { ID } from '@shared/types';

export type ProductStatus = 'in_stock' | 'out_of_stock' | 'low_stock';
export type ProductCategory = 'electronics' | 'accessories' | 'software';

export interface Product {
  id: ID;
  name: string;
  price: number;
  category: ProductCategory;
  stock: number;
  status: ProductStatus;
  imageUrl: string;
  rating: number;
}
