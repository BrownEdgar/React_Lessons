// Страница Skeleton — skeleton-заглушки для загружаемого контента
// Показывает форму контента пока данные не загрузились
// Docs: https://www.radix-ui.com/themes/docs/components/skeleton

import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Separator,
  Skeleton,
  Text,
} from '@radix-ui/themes';
import { useState, useEffect } from 'react';
import { MOCK_USERS, MOCK_PRODUCTS } from '@shared/mocks';
import { UserCard } from '@entities/user';
import { ProductCard } from '@entities/product';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

// Skeleton карточки пользователя
const UserCardSkeleton = () => (
  <Card style={{ maxWidth: 320 }}>
    <Flex gap="3" align="center">
      <Skeleton width="52px" height="52px" style={{ borderRadius: '50%' }} />
      <Box style={{ flex: 1 }}>
        <Skeleton mb="1" style={{ height: 16, width: '70%' }} />
        <Skeleton mb="1" style={{ height: 12, width: '90%' }} />
        <Skeleton style={{ height: 18, width: '40%', borderRadius: 9999 }} />
      </Box>
    </Flex>
  </Card>
);

// Skeleton карточки продукта
const ProductCardSkeleton = () => (
  <Card style={{ maxWidth: 280, overflow: 'hidden' }}>
    <Skeleton style={{ height: 160, marginBottom: 12 }} />
    <Skeleton mb="1" style={{ height: 16, width: '80%' }} />
    <Flex justify="between" align="center" mt="1">
      <Skeleton style={{ height: 20, width: '40%' }} />
      <Skeleton style={{ height: 18, width: '30%', borderRadius: 9999 }} />
    </Flex>
  </Card>
);

export const SkeletonPage = () => {
  const [loadedUsers, setLoadedUsers] = useState(false);
  const [loadedProducts, setLoadedProducts] = useState(false);
  const [loadedArticle, setLoadedArticle] = useState(false);

  // Сброс состояния
  const reset = () => {
    setLoadedUsers(false);
    setLoadedProducts(false);
    setLoadedArticle(false);
  };

  // Автозагрузка при монтировании
  useEffect(() => {
    const t1 = setTimeout(() => setLoadedUsers(true), 1800);
    const t2 = setTimeout(() => setLoadedProducts(true), 2600);
    const t3 = setTimeout(() => setLoadedArticle(true), 1200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [loadedUsers, loadedProducts, loadedArticle]);

  return (
    <Box p="6" style={{ maxWidth: 1000 }}>
      <Flex justify="between" align="center" mb="2">
        <Heading size="8">Skeleton</Heading>
        <Button size="2" variant="outline" color="violet" onClick={reset}>
          Перезапустить анимацию
        </Button>
      </Flex>
      <Text size="3" color="gray" mb="6" as="p">
        Заглушки-скелетоны для плавной загрузки контента
      </Text>

      {/* Базовые формы Skeleton */}
      <Section title="Базовые формы Skeleton">
        <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
          <Skeleton style={{ height: 16 }} />
          <Skeleton style={{ height: 16, width: '80%' }} />
          <Skeleton style={{ height: 16, width: '60%' }} />
          <Separator />
          <Flex gap="3" align="center">
            <Skeleton width="48px" height="48px" style={{ borderRadius: '50%' }} />
            <Box style={{ flex: 1 }}>
              <Skeleton mb="2" style={{ height: 14 }} />
              <Skeleton style={{ height: 12, width: '70%' }} />
            </Box>
          </Flex>
          <Separator />
          <Skeleton style={{ height: 120 }} />
          <Flex gap="2">
            <Skeleton style={{ height: 32, flex: 1, borderRadius: 'var(--radius-2)' }} />
            <Skeleton style={{ height: 32, flex: 1, borderRadius: 'var(--radius-2)' }} />
          </Flex>
        </Flex>
      </Section>

      {/* Skeleton → реальный контент: статья */}
      <Section title="Skeleton → загрузка статьи">
        <Box style={{ maxWidth: 500 }}>
          {loadedArticle ? (
            <Box>
              <Heading size="5" mb="2">Введение в Feature-Sliced Design</Heading>
              <Flex align="center" gap="2" mb="3">
                <Avatar src={MOCK_USERS[0].avatarUrl} fallback="А" size="2" radius="full" color="violet" />
                <Text size="2" color="gray">{MOCK_USERS[0].name} · 15 мин чтения</Text>
              </Flex>
              <Text size="3" as="p" mb="2">
                FSD — методология архитектуры фронтенда, которая помогает командам
                стандартизировать структуру проекта и делает её предсказуемой и масштабируемой.
              </Text>
              <Text size="3" as="p" color="gray">
                Основная идея — разделить код по слоям (layers) и срезам (slices), где
                каждый слой имеет чёткую зону ответственности.
              </Text>
            </Box>
          ) : (
            <Box>
              <Skeleton mb="2" style={{ height: 28, width: '70%' }} />
              <Flex align="center" gap="2" mb="3">
                <Skeleton width="32px" height="32px" style={{ borderRadius: '50%' }} />
                <Skeleton style={{ height: 14, width: 200 }} />
              </Flex>
              <Skeleton mb="2" style={{ height: 16 }} />
              <Skeleton mb="2" style={{ height: 16 }} />
              <Skeleton mb="4" style={{ height: 16, width: '80%' }} />
              <Skeleton mb="2" style={{ height: 16 }} />
              <Skeleton style={{ height: 16, width: '65%' }} />
            </Box>
          )}
        </Box>
      </Section>

      {/* Skeleton → карточки пользователей */}
      <Section title="Skeleton → карточки пользователей">
        <Grid columns={{ initial: '1', sm: '2', md: '3' }} gap="4">
          {loadedUsers
            ? MOCK_USERS.map((user) => <UserCard key={user.id} user={user} />)
            : Array.from({ length: 4 }).map((_, i) => <UserCardSkeleton key={i} />)
          }
        </Grid>
      </Section>

      {/* Skeleton → карточки продуктов */}
      <Section title="Skeleton → карточки продуктов">
        <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="4">
          {loadedProducts
            ? MOCK_PRODUCTS.map((p) => <ProductCard key={p.id} product={p} />)
            : Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />)
          }
        </Grid>
      </Section>

      {/* Skeleton в таблице */}
      <Section title="Skeleton — заглушка таблицы">
        <Box style={{ border: '1px solid var(--gray-4)', borderRadius: 'var(--radius-3)', overflow: 'hidden' }}>
          {/* Заголовок */}
          <Flex p="3" style={{ borderBottom: '1px solid var(--gray-4)', background: 'var(--gray-2)' }} gap="4">
            {['25%', '30%', '20%', '25%'].map((w, i) => (
              <Skeleton key={i} style={{ height: 14, width: w }} />
            ))}
          </Flex>
          {/* Строки */}
          {Array.from({ length: 4 }).map((_, row) => (
            <Flex
              key={row}
              p="3"
              gap="4"
              align="center"
              style={{ borderBottom: row < 3 ? '1px solid var(--gray-3)' : 'none' }}
            >
              <Skeleton width="28px" height="28px" style={{ borderRadius: '50%', flexShrink: 0 }} />
              <Skeleton style={{ height: 14, width: '20%' }} />
              <Skeleton style={{ height: 14, width: '25%' }} />
              <Skeleton style={{ height: 20, width: '15%', borderRadius: 9999 }} />
              <Skeleton style={{ height: 14, width: '20%' }} />
            </Flex>
          ))}
        </Box>
      </Section>
    </Box>
  );
};
