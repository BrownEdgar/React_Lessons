// Карточка пользователя — отображает аватар, имя, email, роль и отдел
// Docs: https://www.radix-ui.com/themes/docs/components/card
// Docs: https://www.radix-ui.com/themes/docs/components/avatar

import { Avatar, Badge, Box, Card, Flex, Text } from '@radix-ui/themes';
import type { User, UserRole } from '../model/types';

const ROLE_COLOR: Record<UserRole, 'red' | 'blue' | 'gray'> = {
  admin: 'red',
  editor: 'blue',
  viewer: 'gray',
};

const ROLE_LABEL: Record<UserRole, string> = {
  admin: 'Админ',
  editor: 'Редактор',
  viewer: 'Читатель',
};

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => (
  <Card style={{ maxWidth: 320 }}>
    <Flex gap="3" align="center">
      <Avatar
        src={user.avatarUrl}
        fallback={user.name[0]}
        size="4"
        radius="full"
        color="violet"
      />
      <Box>
        <Flex align="center" gap="2" mb="1">
          <Text as="div" size="2" weight="bold">
            {user.name}
          </Text>
          {user.status === 'inactive' && (
            <Badge color="gray" size="1" variant="soft">
              неактивен
            </Badge>
          )}
        </Flex>
        <Text as="div" size="1" color="gray" mb="1">
          {user.email}
        </Text>
        <Flex gap="1" align="center">
          <Badge color={ROLE_COLOR[user.role]} size="1">
            {ROLE_LABEL[user.role]}
          </Badge>
          <Text size="1" color="gray">
            · {user.department}
          </Text>
        </Flex>
      </Box>
    </Flex>
  </Card>
);
