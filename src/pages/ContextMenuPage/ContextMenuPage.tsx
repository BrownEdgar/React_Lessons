// Страница ContextMenu — меню по правому клику (или долгому тапу на мобиле)
// Docs: https://www.radix-ui.com/themes/docs/components/context-menu

import {
  Box,
  Card,
  ContextMenu,
  Grid,
  Heading,
  Separator,
  Text,
} from '@radix-ui/themes';
import {
  CopyIcon,
  Pencil1Icon,
  TrashIcon,
  Share1Icon,
  ArchiveIcon,
  PlusIcon,
  StarFilledIcon,
  BookmarkIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';
import { MOCK_USERS } from '@shared/mocks';
import { MOCK_PRODUCTS } from '@shared/mocks';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const ContextMenuPage = () => {
  const [lastAction, setLastAction] = useState<string | null>(null);
  const action = (label: string) => () => setLastAction(label);

  return (
    <Box p="6" style={{ maxWidth: 900 }}>
      <Heading size="8" mb="2">
        ContextMenu
      </Heading>
      <Text size="3" color="gray" mb="6" as="p">
        Меню по правому клику — ПКМ на области или карточке
      </Text>

      {lastAction && (
        <Box mb="4" p="3" style={{ background: 'var(--violet-3)', borderRadius: 'var(--radius-3)' }}>
          <Text size="2">
            Действие: <Text weight="bold" color="violet">{lastAction}</Text>
          </Text>
        </Box>
      )}

      {/* Простая область */}
      <Section title="Базовый ContextMenu — правый клик по области">
        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <Box
              p="8"
              style={{
                border: '2px dashed var(--gray-6)',
                borderRadius: 'var(--radius-3)',
                textAlign: 'center',
                cursor: 'context-menu',
                userSelect: 'none',
              }}
            >
              <Text size="2" color="gray">
                Кликни правой кнопкой мыши здесь
              </Text>
            </Box>
          </ContextMenu.Trigger>
          <ContextMenu.Content>
            <ContextMenu.Item onSelect={action('Создать')}>
              <PlusIcon /> Создать новый
            </ContextMenu.Item>
            <ContextMenu.Item onSelect={action('Выбрать всё')}>Выбрать всё</ContextMenu.Item>
            <ContextMenu.Separator />
            <ContextMenu.Item onSelect={action('Вставить')}>Вставить</ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
      </Section>

      {/* Карточки пользователей с контекстным меню */}
      <Section title="ContextMenu на карточках пользователей">
        <Text size="2" color="gray" mb="3" style={{ display: 'block' }}>
          Правый клик на карточку пользователя
        </Text>
        <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="3">
          {MOCK_USERS.map((user) => (
            <ContextMenu.Root key={user.id}>
              <ContextMenu.Trigger>
                <Card style={{ cursor: 'context-menu', userSelect: 'none' }}>
                  <Text weight="bold" size="2" as="div">{user.name}</Text>
                  <Text size="1" color="gray">{user.department}</Text>
                </Card>
              </ContextMenu.Trigger>
              <ContextMenu.Content>
                <ContextMenu.Label>{user.name}</ContextMenu.Label>
                <ContextMenu.Separator />
                <ContextMenu.Item onSelect={action(`Открыть: ${user.name}`)}>
                  <Pencil1Icon /> Открыть профиль
                </ContextMenu.Item>
                <ContextMenu.Item onSelect={action(`Копировать email: ${user.email}`)}>
                  <CopyIcon /> Копировать email
                </ContextMenu.Item>
                <ContextMenu.Item onSelect={action(`Написать: ${user.name}`)}>
                  <Share1Icon /> Написать
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Item color="red" onSelect={action(`Удалить: ${user.name}`)}>
                  <TrashIcon /> Удалить
                </ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu.Root>
          ))}
        </Grid>
      </Section>

      {/* Карточки продуктов */}
      <Section title="ContextMenu на карточках продуктов">
        <Text size="2" color="gray" mb="3" style={{ display: 'block' }}>
          Правый клик на карточку продукта
        </Text>
        <Grid columns={{ initial: '1', sm: '2', md: '4' }} gap="3">
          {MOCK_PRODUCTS.map((product) => (
            <ContextMenu.Root key={product.id}>
              <ContextMenu.Trigger>
                <Card style={{ cursor: 'context-menu', userSelect: 'none' }}>
                  <Text weight="bold" size="2" as="div" mb="1">{product.name}</Text>
                  <Text size="2" color="violet" weight="bold">
                    {product.price.toLocaleString('ru-RU')} ₽
                  </Text>
                </Card>
              </ContextMenu.Trigger>
              <ContextMenu.Content>
                <ContextMenu.Label>{product.name}</ContextMenu.Label>
                <ContextMenu.Separator />
                <ContextMenu.Item onSelect={action(`В корзину: ${product.name}`)}>
                  <PlusIcon /> В корзину
                </ContextMenu.Item>
                <ContextMenu.Item onSelect={action(`Избранное: ${product.name}`)}>
                  <StarFilledIcon /> В избранное
                </ContextMenu.Item>
                <ContextMenu.Item onSelect={action(`Закладка: ${product.name}`)}>
                  <BookmarkIcon /> Сохранить
                </ContextMenu.Item>
                <ContextMenu.Separator />
                <ContextMenu.Sub>
                  <ContextMenu.SubTrigger><Share1Icon /> Поделиться</ContextMenu.SubTrigger>
                  <ContextMenu.SubContent>
                    <ContextMenu.Item onSelect={action('Ссылка')}>Скопировать ссылку</ContextMenu.Item>
                    <ContextMenu.Item onSelect={action('Telegram')}>Telegram</ContextMenu.Item>
                  </ContextMenu.SubContent>
                </ContextMenu.Sub>
                <ContextMenu.Separator />
                <ContextMenu.Item color="red" onSelect={action(`Удалить: ${product.name}`)}>
                  <TrashIcon /> Удалить
                </ContextMenu.Item>
              </ContextMenu.Content>
            </ContextMenu.Root>
          ))}
        </Grid>
      </Section>

      {/* Текстовая область */}
      <Section title="ContextMenu — текстовая область">
        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <Box
              p="5"
              style={{
                border: '1px solid var(--gray-4)',
                borderRadius: 'var(--radius-3)',
                cursor: 'text',
              }}
            >
              <Text size="3">
                Radix UI Themes предоставляет набор компонентов с готовым дизайном на основе
                Radix Primitives. Правый клик показывает контекстное меню для работы с текстом.
              </Text>
            </Box>
          </ContextMenu.Trigger>
          <ContextMenu.Content>
            <ContextMenu.Item onSelect={action('Копировать текст')}>
              <CopyIcon /> Копировать
            </ContextMenu.Item>
            <ContextMenu.Item onSelect={action('Поделиться')}>
              <Share1Icon /> Поделиться
            </ContextMenu.Item>
            <ContextMenu.Item onSelect={action('Архивировать')}>
              <ArchiveIcon /> Архивировать
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
      </Section>
    </Box>
  );
};
