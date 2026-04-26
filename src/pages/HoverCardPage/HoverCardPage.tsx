// Страница HoverCard — всплывающие карточки-превью при наведении
// Используется для превью пользователей, ссылок, тегов без лишних кликов
// Docs: https://www.radix-ui.com/themes/docs/components/hover-card

import {
  Avatar,
  Badge,
  Box,
  DataList,
  Flex,
  Grid,
  Heading,
  HoverCard,
  Link,
  Separator,
  Text,
} from '@radix-ui/themes';
import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';
import { MOCK_USERS } from '@shared/mocks';
import { MOCK_PRODUCTS } from '@shared/mocks';
import { formatDate, formatPrice } from '@shared/lib';
import type { UserRole } from '@entities/user';

const ROLE_COLOR: Record<UserRole, 'red' | 'blue' | 'gray'> = {
  admin: 'red',
  editor: 'blue',
  viewer: 'gray',
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

export const HoverCardPage = () => (
  <Box p="6" style={{ maxWidth: 900 }}>
    <Heading size="8" mb="2">
      HoverCard
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      Превью-карточки при наведении — пользователи, продукты, ссылки
    </Text>

    {/* Превью пользователей */}
    <Section title="HoverCard — превью пользователей">
      <Text size="3" mb="4" as="p" color="gray">
        Наведи на имя пользователя для просмотра профиля
      </Text>
      <Flex gap="4" wrap="wrap">
        {MOCK_USERS.map((user) => (
          <HoverCard.Root key={user.id}>
            <HoverCard.Trigger>
              <Flex align="center" gap="2" style={{ cursor: 'pointer' }}>
                <Avatar
                  src={user.avatarUrl}
                  fallback={user.name[0]}
                  size="2"
                  radius="full"
                  color="violet"
                />
                <Link color="violet" style={{ textDecoration: 'none' }}>
                  {user.name}
                </Link>
              </Flex>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ width: 300 }}>
              <Flex gap="3" align="start">
                <Avatar
                  src={user.avatarUrl}
                  fallback={user.name[0]}
                  size="5"
                  radius="full"
                  color="violet"
                />
                <Box style={{ flex: 1 }}>
                  <Flex align="center" gap="2" mb="1">
                    <Text weight="bold" size="3">{user.name}</Text>
                    <Badge color={ROLE_COLOR[user.role]} size="1">{user.role}</Badge>
                  </Flex>
                  <Text size="1" color="gray" as="div" mb="3">{user.email}</Text>
                  <DataList.Root size="1">
                    <DataList.Item>
                      <DataList.Label>Отдел</DataList.Label>
                      <DataList.Value>{user.department}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label>Вступил</DataList.Label>
                      <DataList.Value>{formatDate(user.joinedAt)}</DataList.Value>
                    </DataList.Item>
                    <DataList.Item>
                      <DataList.Label>Статус</DataList.Label>
                      <DataList.Value>
                        <Badge
                          color={user.status === 'active' ? 'green' : 'gray'}
                          size="1"
                          variant="soft"
                        >
                          {user.status === 'active' ? 'Активен' : 'Неактивен'}
                        </Badge>
                      </DataList.Value>
                    </DataList.Item>
                  </DataList.Root>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
        ))}
      </Flex>
    </Section>

    {/* Превью продуктов */}
    <Section title="HoverCard — превью продуктов">
      <Text size="3" mb="4" as="p" color="gray">
        Наведи на название продукта для просмотра деталей
      </Text>
      <Flex gap="4" wrap="wrap">
        {MOCK_PRODUCTS.map((product) => (
          <HoverCard.Root key={product.id}>
            <HoverCard.Trigger>
              <Link color="violet" style={{ cursor: 'pointer' }}>
                {product.name}
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ width: 280 }}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{
                  width: '100%',
                  height: 120,
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-2)',
                  marginBottom: 12,
                }}
              />
              <Text weight="bold" size="2" as="div" mb="1">{product.name}</Text>
              <Flex justify="between" align="center" mb="2">
                <Text size="3" weight="bold" color="violet">
                  {formatPrice(product.price)}
                </Text>
                <Badge
                  color={
                    product.status === 'in_stock' ? 'green' :
                    product.status === 'out_of_stock' ? 'red' : 'orange'
                  }
                  size="1"
                >
                  {product.stock > 0 ? `${product.stock} шт.` : 'Нет'}
                </Badge>
              </Flex>
              <Text size="1" color="gray">Рейтинг: ⭐ {product.rating} · {product.category}</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        ))}
      </Flex>
    </Section>

    {/* Превью ссылок */}
    <Section title="HoverCard — превью внешних ссылок">
      <Flex direction="column" gap="3">
        <Text size="3" as="p">
          Посмотри на документацию{' '}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="https://www.radix-ui.com" target="_blank" color="violet">
                Radix UI
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ width: 280 }}>
              <Flex gap="3" align="start">
                <Box
                  style={{
                    width: 40, height: 40,
                    background: 'var(--violet-9)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Text weight="bold" size="3" style={{ color: 'white' }}>R</Text>
                </Box>
                <Box>
                  <Text weight="bold" size="2" as="div">Radix UI</Text>
                  <Text size="1" color="gray" as="div" mb="2">radix-ui.com</Text>
                  <Text size="2">
                    Unstyled, accessible React primitives for building high quality design systems.
                  </Text>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
          {' '}или{' '}
          <HoverCard.Root>
            <HoverCard.Trigger>
              <Link href="https://vitejs.dev" target="_blank" color="orange">
                Vite
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ width: 260 }}>
              <Flex gap="3" align="start">
                <Box
                  style={{
                    width: 40, height: 40,
                    background: 'linear-gradient(135deg, #646cff, #ff7f50)',
                    borderRadius: 8,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Text weight="bold" size="3" style={{ color: 'white' }}>V</Text>
                </Box>
                <Box>
                  <Text weight="bold" size="2" as="div">Vite</Text>
                  <Text size="1" color="gray" as="div" mb="2">vitejs.dev</Text>
                  <Text size="2">Next generation frontend tooling. It&apos;s fast!</Text>
                </Box>
              </Flex>
            </HoverCard.Content>
          </HoverCard.Root>
          .
        </Text>
      </Flex>
    </Section>

    {/* HoverCard на упоминаниях */}
    <Section title="HoverCard — социальные сети (упоминания)">
      <Flex gap="5" wrap="wrap">
        {[
          { icon: <GitHubLogoIcon />, handle: '@alexivanov', name: 'Алексей Иванов', followers: '1.2k', color: 'gray' as const },
          { icon: <TwitterLogoIcon />, handle: '@mpetrova', name: 'Мария Петрова', followers: '4.8k', color: 'blue' as const },
          { icon: <LinkedInLogoIcon />, handle: '@dsidorov', name: 'Дмитрий Сидоров', followers: '920', color: 'indigo' as const },
        ].map(({ icon, handle, name, followers, color }) => (
          <HoverCard.Root key={handle}>
            <HoverCard.Trigger>
              <Link color={color} style={{ cursor: 'pointer' }}>{handle}</Link>
            </HoverCard.Trigger>
            <HoverCard.Content style={{ width: 240 }}>
              <Flex gap="3" align="center" mb="3">
                <Box style={{ color: `var(--${color}-9)`, fontSize: 28 }}>{icon}</Box>
                <Box>
                  <Text weight="bold" size="2" as="div">{name}</Text>
                  <Text size="1" color="gray">{handle}</Text>
                </Box>
              </Flex>
              <Text size="2" color="gray">
                Подписчиков: <Text weight="bold">{followers}</Text>
              </Text>
            </HoverCard.Content>
          </HoverCard.Root>
        ))}
      </Flex>
    </Section>

    {/* Стороны HoverCard */}
    <Section title="HoverCard — стороны (side)">
      <Grid columns={{ initial: '2', sm: '4' }} gap="3" style={{ maxWidth: 500 }}>
        {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
          <HoverCard.Root key={side}>
            <HoverCard.Trigger>
              <Link color="violet" style={{ cursor: 'pointer' }}>
                side=&quot;{side}&quot;
              </Link>
            </HoverCard.Trigger>
            <HoverCard.Content side={side} style={{ width: 180 }}>
              <Text size="2">HoverCard side=&quot;{side}&quot;</Text>
            </HoverCard.Content>
          </HoverCard.Root>
        ))}
      </Grid>
    </Section>
  </Box>
);
