// Карточка продукта — изображение через Inset, цена и статус через Badge
// Docs: https://www.radix-ui.com/themes/docs/components/card
// Docs: https://www.radix-ui.com/themes/docs/components/inset

import { Badge, Box, Card, Flex, Inset, Text } from '@radix-ui/themes';
import { StarFilledIcon } from '@radix-ui/react-icons';
import { formatPrice } from '@shared/lib';
import type { Product, ProductStatus } from '../model/types';

const STATUS_MAP: Record<ProductStatus, { color: 'green' | 'red' | 'orange'; label: string }> = {
  in_stock: { color: 'green', label: 'В наличии' },
  out_of_stock: { color: 'red', label: 'Нет в наличии' },
  low_stock: { color: 'orange', label: 'Мало' },
};

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const badge = STATUS_MAP[product.status];
  return (
    <Card style={{ maxWidth: 280, overflow: 'hidden' }}>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: '100%', height: 160, objectFit: 'cover', display: 'block' }}
        />
      </Inset>
      <Box mt="2">
        <Text as="div" size="2" weight="bold" mb="1">
          {product.name}
        </Text>
        <Flex justify="between" align="center" mb="1">
          <Text size="3" weight="bold" color="violet">
            {formatPrice(product.price)}
          </Text>
          <Badge color={badge.color} size="1">
            {badge.label}
          </Badge>
        </Flex>
        <Flex align="center" gap="1">
          <StarFilledIcon color="gold" />
          <Text size="1" color="gray">
            {product.rating} · склад: {product.stock} шт.
          </Text>
        </Flex>
      </Box>
    </Card>
  );
};
