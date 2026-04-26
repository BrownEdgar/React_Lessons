// Страница Cards — варианты карточек с пользователями и продуктами
// Показывает все варианты (surface, classic, ghost) и Grid-раскладку
// Docs: https://www.radix-ui.com/themes/docs/components/card
// Docs: https://www.radix-ui.com/themes/docs/components/grid

import { Box, Card, Grid, Heading, Separator, Text } from '@radix-ui/themes';
import { UserCard } from '@entities/user';
import { ProductCard } from '@entities/product';
import { MOCK_USERS, MOCK_PRODUCTS } from '@shared/mocks';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const CardPage = () => (
  <Box p="6" style={{ maxWidth: 1100 }}>
    <Heading size="8" mb="2">
      Cards
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      Компонент Card — варианты, с изображениями и данными
    </Text>

    {/* Карточки пользователей */}
    <Section title="User Cards (mock данные)">
      <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
        {MOCK_USERS.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Grid>
    </Section>

    {/* Карточки продуктов */}
    <Section title="Product Cards (Inset + Badge)">
      <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="4">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Section>

    {/* Варианты Card */}
    <Section title="Card Variants">
      <Grid columns={{ initial: '1', sm: '3' }} gap="4">
        <Card variant="surface">
          <Text weight="bold" size="2" as="div" mb="1">
            surface (по умолчанию)
          </Text>
          <Text size="2" color="gray">
            Стандартный вариант с фоном и бордером
          </Text>
        </Card>
        <Card variant="classic">
          <Text weight="bold" size="2" as="div" mb="1">
            classic
          </Text>
          <Text size="2" color="gray">
            Классический вариант с тенью
          </Text>
        </Card>
        <Card variant="ghost">
          <Text weight="bold" size="2" as="div" mb="1">
            ghost
          </Text>
          <Text size="2" color="gray">
            Без фона и рамки — только контент
          </Text>
        </Card>
      </Grid>
    </Section>

    {/* Интерактивная карточка */}
    <Section title="Clickable Card (asChild)">
      <Grid columns={{ initial: '1', sm: '2' }} gap="4" style={{ maxWidth: 600 }}>
        <Card
          asChild
          style={{ cursor: 'pointer', textDecoration: 'none' }}
        >
          <a href="https://www.radix-ui.com/themes/docs/components/card" target="_blank" rel="noopener noreferrer">
            <Text weight="bold" size="2" as="div" mb="1" color="violet">
              Документация Card →
            </Text>
            <Text size="2" color="gray">
              Кликабельная карточка через asChild + &lt;a&gt;
            </Text>
          </a>
        </Card>
      </Grid>
    </Section>
  </Box>
);
