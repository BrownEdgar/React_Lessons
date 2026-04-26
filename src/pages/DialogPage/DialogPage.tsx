// Страница Dialog — модальные окна: обычный Dialog и AlertDialog для подтверждений
// Docs: https://www.radix-ui.com/themes/docs/components/dialog
// Docs: https://www.radix-ui.com/themes/docs/components/alert-dialog

import {
  AlertDialog,
  Badge,
  Box,
  Button,
  Dialog,
  Flex,
  Grid,
  Heading,
  Separator,
  Text,
  TextField,
} from '@radix-ui/themes';
import { TrashIcon, Pencil1Icon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { MOCK_USERS } from '@shared/mocks';

export const DialogPage = () => {
  const [deletedId, setDeletedId] = useState<string | null>(null);

  return (
    <Box p="6" style={{ maxWidth: 900 }}>
      <Heading size="8" mb="2">
        Dialogs
      </Heading>
      <Text size="3" color="gray" mb="6" as="p">
        Dialog и AlertDialog — модальные окна с фокус-трапом
      </Text>

      {/* Базовый Dialog */}
      <Box mb="6">
        <Heading size="4" mb="3" color="violet">
          Dialog — базовый пример
        </Heading>
        <Separator size="4" mb="4" />
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="solid" color="violet">
              Открыть диалог
            </Button>
          </Dialog.Trigger>
          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Новый пользователь</Dialog.Title>
            <Dialog.Description size="2" mb="4" color="gray">
              Заполните данные для создания нового пользователя
            </Dialog.Description>
            <Flex direction="column" gap="3">
              <Box>
                <Text as="div" size="2" weight="medium" mb="1">
                  Имя
                </Text>
                <TextField.Root placeholder="Иван Иванов" />
              </Box>
              <Box>
                <Text as="div" size="2" weight="medium" mb="1">
                  Email
                </Text>
                <TextField.Root placeholder="ivan@example.com" type="email" />
              </Box>
            </Flex>
            <Flex gap="3" mt="5" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">
                  Отмена
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button color="violet">Создать</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Box>

      {/* AlertDialog — удаление пользователя */}
      <Box mb="6">
        <Heading size="4" mb="3" color="violet">
          AlertDialog — подтверждение удаления
        </Heading>
        <Separator size="4" mb="4" />
        <Flex direction="column" gap="3">
          {MOCK_USERS.map((user) => (
            <Flex key={user.id} align="center" justify="between" p="3"
              style={{ border: '1px solid var(--gray-4)', borderRadius: 'var(--radius-3)' }}
            >
              <Flex align="center" gap="2">
                <Text size="2" weight="medium">{user.name}</Text>
                {deletedId === user.id && (
                  <Badge color="red" size="1">удалён</Badge>
                )}
              </Flex>
              <AlertDialog.Root>
                <AlertDialog.Trigger>
                  <Button
                    variant="ghost"
                    color="red"
                    size="1"
                    disabled={deletedId === user.id}
                  >
                    <TrashIcon />
                    Удалить
                  </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content style={{ maxWidth: 450 }}>
                  <AlertDialog.Title>Удалить пользователя?</AlertDialog.Title>
                  <AlertDialog.Description size="2" color="gray">
                    Вы уверены, что хотите удалить{' '}
                    <Text weight="bold">{user.name}</Text>? Это действие необратимо.
                  </AlertDialog.Description>
                  <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                      <Button variant="soft" color="gray">
                        Отмена
                      </Button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                      <Button
                        color="red"
                        onClick={() => setDeletedId(String(user.id))}
                      >
                        <TrashIcon />
                        Да, удалить
                      </Button>
                    </AlertDialog.Action>
                  </Flex>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </Flex>
          ))}
        </Flex>
      </Box>

      {/* Dialog с прокручиваемым контентом */}
      <Box mb="6">
        <Heading size="4" mb="3" color="violet">
          Dialog — размеры и прокрутка
        </Heading>
        <Separator size="4" mb="4" />
        <Grid columns={{ initial: '1', sm: '3' }} gap="3" style={{ maxWidth: 600 }}>
          {(['1', '2', '3', '4'] as const).map((size) => (
            <Dialog.Root key={size}>
              <Dialog.Trigger>
                <Button variant="outline" color="violet">
                  Размер {size}
                </Button>
              </Dialog.Trigger>
              <Dialog.Content size={size}>
                <Dialog.Title>Диалог size={size}</Dialog.Title>
                <Dialog.Description color="gray" size="2">
                  Пример диалога с размером {size}. Каждый размер меняет padding и ширину.
                </Dialog.Description>
                <Flex justify="end" mt="4">
                  <Dialog.Close>
                    <Button color="violet">Закрыть</Button>
                  </Dialog.Close>
                </Flex>
              </Dialog.Content>
            </Dialog.Root>
          ))}
        </Grid>
      </Box>

      {/* Dialog редактирования */}
      <Box mb="6">
        <Heading size="4" mb="3" color="violet">
          Dialog — редактирование пользователя
        </Heading>
        <Separator size="4" mb="4" />
        <Dialog.Root>
          <Dialog.Trigger>
            <Button variant="outline" color="violet">
              <Pencil1Icon />
              Редактировать профиль
            </Button>
          </Dialog.Trigger>
          <Dialog.Content style={{ maxWidth: 500 }}>
            <Dialog.Title>Редактировать профиль</Dialog.Title>
            <Flex direction="column" gap="3" mt="2">
              <Grid columns="2" gap="3">
                <Box>
                  <Text as="div" size="2" weight="medium" mb="1">Имя</Text>
                  <TextField.Root defaultValue={MOCK_USERS[0].name} />
                </Box>
                <Box>
                  <Text as="div" size="2" weight="medium" mb="1">Email</Text>
                  <TextField.Root defaultValue={MOCK_USERS[0].email} />
                </Box>
              </Grid>
              <Box>
                <Text as="div" size="2" weight="medium" mb="1">Отдел</Text>
                <TextField.Root defaultValue={MOCK_USERS[0].department} />
              </Box>
            </Flex>
            <Flex gap="3" mt="5" justify="end">
              <Dialog.Close>
                <Button variant="soft" color="gray">Отмена</Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button color="violet">Сохранить</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Box>
    </Box>
  );
};
