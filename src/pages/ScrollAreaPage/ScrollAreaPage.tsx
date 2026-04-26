// Страница ScrollArea — кастомный скроллбар для переполненных контейнеров
// Docs: https://www.radix-ui.com/themes/docs/components/scroll-area

import {
  Avatar,
  Badge,
  Box,
  Card,
  Flex,
  Grid,
  Heading,
  ScrollArea,
  Separator,
  Text,
} from '@radix-ui/themes';
import { MOCK_USERS, MOCK_PRODUCTS } from '@shared/mocks';
import { formatDate, formatPrice } from '@shared/lib';
import type { UserRole } from '@entities/user';

const ROLE_COLOR: Record<UserRole, 'red' | 'blue' | 'gray'> = {
  admin: 'red',
  editor: 'blue',
  viewer: 'gray',
};

// Генерируем больше данных для демонстрации прокрутки
const EXTENDED_USERS = Array.from({ length: 20 }, (_, i) => ({
  ...MOCK_USERS[i % MOCK_USERS.length],
  id: `${i}`,
  name: `${MOCK_USERS[i % MOCK_USERS.length].name} #${i + 1}`,
}));

const LOREM = `TypeScript — это строго типизированный язык программирования, построенный
на основе JavaScript, который даёт вам лучшие инструменты в любом масштабе.
Feature-Sliced Design (FSD) — это архитектурная методология для фронтенд-проектов.
Radix UI предоставляет примитивные компоненты без стилей для создания качественных
систем дизайна. Tailwind CSS — это CSS-фреймворк, ориентированный на утилиты,
для быстрого создания современных веб-интерфейсов. Vite — это инструмент сборки
нового поколения, который значительно улучшает опыт разработки.
React 19 привносит новые хуки и улучшения производительности.`;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const ScrollAreaPage = () => (
  <Box p="6" style={{ maxWidth: 1000 }}>
    <Heading size="8" mb="2">
      ScrollArea
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      Кастомный скроллбар — вертикальный, горизонтальный, оба направления
    </Text>

    {/* Вертикальная прокрутка — список пользователей */}
    <Section title="ScrollArea — вертикальная прокрутка (список 20 пользователей)">
      <ScrollArea type="hover" scrollbars="vertical" style={{ height: 280 }}>
        <Flex direction="column" gap="1" pr="4">
          {EXTENDED_USERS.map((user) => (
            <Flex
              key={user.id}
              align="center"
              justify="between"
              p="2"
              style={{
                borderRadius: 'var(--radius-2)',
                transition: 'background 0.1s',
              }}
              className="hover:bg-[var(--gray-2)]"
            >
              <Flex align="center" gap="2">
                <Avatar
                  src={user.avatarUrl}
                  fallback={user.name[0]}
                  size="2"
                  radius="full"
                  color="violet"
                />
                <Box>
                  <Text size="2" weight="medium">{user.name}</Text>
                  <Text size="1" color="gray" as="div">{user.department}</Text>
                </Box>
              </Flex>
              <Badge color={ROLE_COLOR[user.role]} size="1">{user.role}</Badge>
            </Flex>
          ))}
        </Flex>
      </ScrollArea>
    </Section>

    {/* Горизонтальная прокрутка — карточки */}
    <Section title="ScrollArea — горизонтальная прокрутка (карточки продуктов)">
      <ScrollArea type="hover" scrollbars="horizontal">
        <Flex gap="3" pb="3" style={{ width: 'max-content' }}>
          {Array.from({ length: 12 }, (_, i) => ({
            ...MOCK_PRODUCTS[i % MOCK_PRODUCTS.length],
            id: `${i}`,
            name: `${MOCK_PRODUCTS[i % MOCK_PRODUCTS.length].name} v${i + 1}`,
          })).map((product) => (
            <Card key={product.id} style={{ minWidth: 220 }}>
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 'var(--radius-2)' }}
              />
              <Text weight="bold" size="2" as="div" mt="2" mb="1">{product.name}</Text>
              <Text size="2" color="violet" weight="bold">{formatPrice(product.price)}</Text>
            </Card>
          ))}
        </Flex>
      </ScrollArea>
    </Section>

    {/* Обе оси */}
    <Section title="ScrollArea — обе оси (both)">
      <ScrollArea
        type="always"
        scrollbars="both"
        style={{ height: 200, width: '100%', maxWidth: 500 }}
      >
        <Box style={{ width: 800, padding: 12 }}>
          <Text size="2" style={{ whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
            {LOREM.repeat(3)}
          </Text>
        </Box>
      </ScrollArea>
    </Section>

    {/* Варианты type */}
    <Section title="ScrollArea — варианты type">
      <Grid columns={{ initial: '1', sm: '3' }} gap="4">
        {(
          [
            { type: 'auto', desc: 'auto — скроллбар только при переполнении' },
            { type: 'always', desc: 'always — скроллбар всегда виден' },
            { type: 'hover', desc: 'hover — скроллбар при наведении' },
          ] as const
        ).map(({ type, desc }) => (
          <Box key={type}>
            <Text size="1" color="gray" mb="2" style={{ display: 'block' }}>{desc}</Text>
            <ScrollArea type={type} scrollbars="vertical" style={{ height: 120 }}>
              <Flex direction="column" gap="1" pr="3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <Text key={i} size="2" color="gray" as="div">Строка {i + 1}</Text>
                ))}
              </Flex>
            </ScrollArea>
          </Box>
        ))}
      </Grid>
    </Section>

    {/* Практический пример — чат */}
    <Section title="ScrollArea — пример чата">
      <Card style={{ maxWidth: 450 }}>
        <Heading size="3" mb="3">Чат команды</Heading>
        <ScrollArea scrollbars="vertical" style={{ height: 240 }} type="hover">
          <Flex direction="column" gap="3" pr="3">
            {[
              { user: MOCK_USERS[0], msg: 'Привет! Как дела с задачей?', time: '14:01' },
              { user: MOCK_USERS[1], msg: 'Почти готово, осталось протестировать Skeleton.', time: '14:03' },
              { user: MOCK_USERS[2], msg: 'Я уже добавил ScrollArea в список.', time: '14:05' },
              { user: MOCK_USERS[3], msg: 'Отлично! Когда деплоим?', time: '14:07' },
              { user: MOCK_USERS[0], msg: 'Как только TypeScript скажет 0 ошибок 😄', time: '14:09' },
              { user: MOCK_USERS[1], msg: 'Это будет не скоро 🤣', time: '14:10' },
              { user: MOCK_USERS[2], msg: 'На самом деле всё работает, я проверил билд.', time: '14:11' },
              { user: MOCK_USERS[3], msg: 'Тогда деплоим сегодня в 18:00.', time: '14:12' },
              { user: MOCK_USERS[0], msg: '👍', time: '14:13' },
            ].map(({ user, msg, time }, i) => (
              <Flex key={i} gap="2" align="start">
                <Avatar
                  src={user.avatarUrl}
                  fallback={user.name[0]}
                  size="2"
                  radius="full"
                  color="violet"
                  style={{ flexShrink: 0 }}
                />
                <Box>
                  <Flex gap="2" align="baseline">
                    <Text size="1" weight="bold">{user.name.split(' ')[0]}</Text>
                    <Text size="1" color="gray">{time}</Text>
                  </Flex>
                  <Text size="2">{msg}</Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </ScrollArea>
      </Card>
    </Section>

    {/* Таблица с горизонтальным скроллом */}
    <Section title="ScrollArea — широкая таблица">
      <ScrollArea type="hover" scrollbars="horizontal">
        <Box style={{ width: 900 }}>
          <Flex
            p="2"
            style={{ background: 'var(--gray-2)', borderRadius: 'var(--radius-3) var(--radius-3) 0 0' }}
            gap="3"
          >
            {['Имя', 'Email', 'Роль', 'Отдел', 'Дата вступления', 'Статус', 'ID'].map((h) => (
              <Text key={h} size="2" weight="bold" style={{ flex: 1, minWidth: 120 }}>{h}</Text>
            ))}
          </Flex>
          {EXTENDED_USERS.slice(0, 8).map((user, i) => (
            <Flex
              key={user.id}
              p="2"
              gap="3"
              align="center"
              style={{
                borderTop: '1px solid var(--gray-3)',
                background: i % 2 === 0 ? 'transparent' : 'var(--gray-1)',
              }}
            >
              <Text size="2" style={{ flex: 1, minWidth: 120 }}>{user.name}</Text>
              <Text size="2" color="gray" style={{ flex: 1, minWidth: 120 }}>{user.email}</Text>
              <Box style={{ flex: 1, minWidth: 120 }}>
                <Badge color={ROLE_COLOR[user.role]} size="1">{user.role}</Badge>
              </Box>
              <Text size="2" style={{ flex: 1, minWidth: 120 }}>{user.department}</Text>
              <Text size="2" color="gray" style={{ flex: 1, minWidth: 120 }}>{formatDate(user.joinedAt)}</Text>
              <Box style={{ flex: 1, minWidth: 120 }}>
                <Badge color={user.status === 'active' ? 'green' : 'gray'} size="1" variant="soft">
                  {user.status}
                </Badge>
              </Box>
              <Text size="1" color="gray" style={{ flex: 1, minWidth: 120 }}>#{user.id}</Text>
            </Flex>
          ))}
        </Box>
      </ScrollArea>
    </Section>
  </Box>
);
