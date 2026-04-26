// Тестовые данные продуктов — используются в Card, Table примерах
import type { Product } from '@entities/product';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Механическая клавиатура',
    price: 12499,
    category: 'electronics',
    stock: 23,
    status: 'in_stock',
    imageUrl: 'https://placehold.co/300x200/8b5cf6/ffffff?text=Keyboard',
    rating: 4.8,
  },
  {
    id: 'p2',
    name: 'Беспроводная мышь',
    price: 3299,
    category: 'electronics',
    stock: 0,
    status: 'out_of_stock',
    imageUrl: 'https://placehold.co/300x200/6366f1/ffffff?text=Mouse',
    rating: 4.2,
  },
  {
    id: 'p3',
    name: 'USB-C хаб 7-в-1',
    price: 5890,
    category: 'accessories',
    stock: 7,
    status: 'low_stock',
    imageUrl: 'https://placehold.co/300x200/0ea5e9/ffffff?text=Hub',
    rating: 4.5,
  },
  {
    id: 'p4',
    name: 'Монитор 27" 4K',
    price: 54990,
    category: 'electronics',
    stock: 4,
    status: 'low_stock',
    imageUrl: 'https://placehold.co/300x200/10b981/ffffff?text=Monitor',
    rating: 4.9,
  },
];
