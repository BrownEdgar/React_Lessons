// Страница Tables — демонстрирует Table компонент Radix UI с mock данными
// Показывает таблицы пользователей и продуктов, варианты (surface, ghost)
// Docs: https://www.radix-ui.com/themes/docs/components/table

import { Badge, Box, Flex, Heading, Separator, Table, Text } from '@radix-ui/themes';
import { MOCK_USERS, MOCK_PRODUCTS } from '@shared/mocks';
import { formatDate, formatPrice } from '@shared/lib';
import type { UserRole, UserStatus } from '@entities/user';
import type { ProductStatus } from '@entities/product';

const ROLE_COLOR: Record<UserRole, 'red' | 'blue' | 'gray'> = {
  admin: 'red',
  editor: 'blue',
  viewer: 'gray',
};

const STATUS_COLOR: Record<UserStatus, 'green' | 'gray'> = {
  active: 'green',
  inactive: 'gray',
};

const PRODUCT_STATUS_COLOR: Record<ProductStatus, 'green' | 'red' | 'orange'> = {
  in_stock: 'green',
  out_of_stock: 'red',
  low_stock: 'orange',
};

const PRODUCT_STATUS_LABEL: Record<ProductStatus, string> = {
  in_stock: 'В наличии',
  out_of_stock: 'Нет',
  low_stock: 'Мало',
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const TablePage = () => (
  <Box p="6" style={{ maxWidth: 1000 }}>
    <Heading size="8" mb="2">
      Tables
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      Table.Root с заголовками, телом, Badge в ячейках
    </Text>

    {/* Таблица пользователей */}
    <Section title="Таблица пользователей (variant=surface)">
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Имя</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Роль</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Отдел</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Дата вступления</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Статус</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {MOCK_USERS.map((user) => (
            <Table.Row key={user.id}>
              <Table.RowHeaderCell>
                <Text weight="medium">{user.name}</Text>
              </Table.RowHeaderCell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell>
                <Badge color={ROLE_COLOR[user.role]} size="1">
                  {user.role}
                </Badge>
              </Table.Cell>
              <Table.Cell>{user.department}</Table.Cell>
              <Table.Cell>{formatDate(user.joinedAt)}</Table.Cell>
              <Table.Cell>
                <Badge color={STATUS_COLOR[user.status]} size="1" variant="soft">
                  {user.status === 'active' ? 'Активен' : 'Неактивен'}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Section>

    {/* Таблица продуктов */}
    <Section title="Таблица продуктов (variant=ghost)">
      <Table.Root variant="ghost">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Название</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Категория</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Цена</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Склад</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Рейтинг</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Статус</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {MOCK_PRODUCTS.map((product) => (
            <Table.Row key={product.id}>
              <Table.RowHeaderCell>
                <Text weight="medium">{product.name}</Text>
              </Table.RowHeaderCell>
              <Table.Cell>
                <Badge variant="soft" color="violet" size="1">
                  {product.category}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                <Text color="violet" weight="bold">
                  {formatPrice(product.price)}
                </Text>
              </Table.Cell>
              <Table.Cell>{product.stock} шт.</Table.Cell>
              <Table.Cell>
                <Flex align="center" gap="1">
                  <Text>⭐</Text>
                  <Text>{product.rating}</Text>
                </Flex>
              </Table.Cell>
              <Table.Cell>
                <Badge color={PRODUCT_STATUS_COLOR[product.status]} size="1">
                  {PRODUCT_STATUS_LABEL[product.status]}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Section>
  </Box>
);
