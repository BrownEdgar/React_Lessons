// Страница DataList & Avatar — структурированные данные и аватары
// Docs: https://www.radix-ui.com/themes/docs/components/data-list
// Docs: https://www.radix-ui.com/themes/docs/components/avatar

import {
  Avatar,
  Badge,
  Box,
  DataList,
  Flex,
  Grid,
  Heading,
  Separator,
  Text,
} from '@radix-ui/themes';
import { MOCK_USERS } from '@shared/mocks';
import { formatDate } from '@shared/lib';
import type { UserRole } from '@entities/user';

const ROLE_COLOR: Record<UserRole, 'red' | 'blue' | 'gray'> = {
  admin: 'red',
  editor: 'blue',
  viewer: 'gray',
};

const AVATAR_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const DataListPage = () => (
  <Box p="6" style={{ maxWidth: 900 }}>
    <Heading size="8" mb="2">
      DataList & Avatar
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      DataList — структурированные пары ключ/значение. Avatar — все размеры и fallback.
    </Text>

    {/* DataList профиля пользователя */}
    <Section title="DataList — профиль пользователя">
      <Grid columns={{ initial: '1', sm: '2' }} gap="6">
        {MOCK_USERS.slice(0, 2).map((user) => (
          <Box key={user.id}>
            <Flex align="center" gap="3" mb="4">
              <Avatar
                src={user.avatarUrl}
                fallback={user.name[0]}
                size="5"
                radius="full"
                color="violet"
              />
              <Box>
                <Text weight="bold" size="3">{user.name}</Text>
                <Text size="1" color="gray" as="div">{user.email}</Text>
              </Box>
            </Flex>
            <DataList.Root>
              <DataList.Item>
                <DataList.Label minWidth="120px">Роль</DataList.Label>
                <DataList.Value>
                  <Badge color={ROLE_COLOR[user.role]} size="1">
                    {user.role}
                  </Badge>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="120px">Отдел</DataList.Label>
                <DataList.Value>{user.department}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="120px">Email</DataList.Label>
                <DataList.Value>
                  <Text color="violet">{user.email}</Text>
                </DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="120px">Вступил</DataList.Label>
                <DataList.Value>{formatDate(user.joinedAt)}</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="120px">Статус</DataList.Label>
                <DataList.Value>
                  <Badge
                    color={user.status === 'active' ? 'green' : 'gray'}
                    variant="soft"
                    size="1"
                  >
                    {user.status === 'active' ? 'Активен' : 'Неактивен'}
                  </Badge>
                </DataList.Value>
              </DataList.Item>
            </DataList.Root>
          </Box>
        ))}
      </Grid>
    </Section>

    {/* Avatar — все 9 размеров */}
    <Section title="Avatar — все размеры (1–9)">
      <Flex align="end" gap="3" wrap="wrap">
        {AVATAR_SIZES.map((size) => (
          <Flex key={size} direction="column" align="center" gap="1">
            <Avatar
              src={MOCK_USERS[0].avatarUrl}
              fallback="А"
              size={size}
              radius="full"
              color="violet"
            />
            <Text size="1" color="gray">
              size={size}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Section>

    {/* Avatar Fallback и варианты */}
    <Section title="Avatar — fallback и radius">
      <Flex gap="4" wrap="wrap" align="center">
        <Flex direction="column" align="center" gap="1">
          <Avatar fallback="АИ" size="5" color="violet" />
          <Text size="1" color="gray">Инициалы</Text>
        </Flex>
        <Flex direction="column" align="center" gap="1">
          <Avatar fallback="МП" size="5" color="blue" />
          <Text size="1" color="gray">color=blue</Text>
        </Flex>
        <Flex direction="column" align="center" gap="1">
          <Avatar fallback="ДС" size="5" color="green" />
          <Text size="1" color="gray">color=green</Text>
        </Flex>
        <Flex direction="column" align="center" gap="1">
          <Avatar fallback="ЕК" size="5" color="red" />
          <Text size="1" color="gray">color=red</Text>
        </Flex>
        <Separator orientation="vertical" style={{ height: 60 }} />
        <Flex direction="column" align="center" gap="1">
          <Avatar fallback="АИ" size="5" radius="none" color="violet" />
          <Text size="1" color="gray">radius=none</Text>
        </Flex>
        <Flex direction="column" align="center" gap="1">
          <Avatar fallback="АИ" size="5" radius="small" color="violet" />
          <Text size="1" color="gray">radius=small</Text>
        </Flex>
        <Flex direction="column" align="center" gap="1">
          <Avatar fallback="АИ" size="5" radius="medium" color="violet" />
          <Text size="1" color="gray">radius=medium</Text>
        </Flex>
        <Flex direction="column" align="center" gap="1">
          <Avatar fallback="АИ" size="5" radius="full" color="violet" />
          <Text size="1" color="gray">radius=full</Text>
        </Flex>
      </Flex>
    </Section>

    {/* Avatar группа */}
    <Section title="Avatar — группа (overlap)">
      <Flex style={{ position: 'relative' }}>
        {MOCK_USERS.map((user, i) => (
          <Box
            key={user.id}
            style={{
              marginLeft: i === 0 ? 0 : -12,
              zIndex: MOCK_USERS.length - i,
              position: 'relative',
            }}
          >
            <Avatar
              src={user.avatarUrl}
              fallback={user.name[0]}
              size="4"
              radius="full"
              color="violet"
              style={{ border: '2px solid var(--color-background)' }}
            />
          </Box>
        ))}
        <Flex align="center" ml="3">
          <Text size="2" color="gray">
            {MOCK_USERS.length} участника
          </Text>
        </Flex>
      </Flex>
    </Section>
  </Box>
);
