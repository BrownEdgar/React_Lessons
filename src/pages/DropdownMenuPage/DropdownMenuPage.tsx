// Страница DropdownMenu — выпадающие меню с группами, иконками, подменю и separator
// Docs: https://www.radix-ui.com/themes/docs/components/dropdown-menu

import {
  Box,
  Button,
  DropdownMenu,
  Flex,
  Heading,
  IconButton,
  Separator,
  Text,
} from '@radix-ui/themes';
import {
  DotsHorizontalIcon,
  DotsVerticalIcon,
  PersonIcon,
  GearIcon,
  ExitIcon,
  CopyIcon,
  Pencil1Icon,
  TrashIcon,
  Share1Icon,
  ArchiveIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons';
import { useState } from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const DropdownMenuPage = () => {
  const [lastAction, setLastAction] = useState<string | null>(null);
  const action = (label: string) => () => setLastAction(label);

  return (
    <Box p="6" style={{ maxWidth: 900 }}>
      <Heading size="8" mb="2">
        DropdownMenu
      </Heading>
      <Text size="3" color="gray" mb="6" as="p">
        Выпадающие меню — группы, иконки, подменю, disabled-пункты
      </Text>

      {lastAction && (
        <Box mb="4" p="3" style={{ background: 'var(--violet-3)', borderRadius: 'var(--radius-3)' }}>
          <Text size="2">
            Последнее действие: <Text weight="bold" color="violet">{lastAction}</Text>
          </Text>
        </Box>
      )}

      {/* Базовое меню */}
      <Section title="Базовое DropdownMenu">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="solid" color="violet">
              Открыть меню <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item onSelect={action('Редактировать')}>
              <Pencil1Icon /> Редактировать
            </DropdownMenu.Item>
            <DropdownMenu.Item onSelect={action('Дублировать')}>
              <CopyIcon /> Дублировать
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item color="red" onSelect={action('Удалить')}>
              <TrashIcon /> Удалить
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Section>

      {/* Меню с группами и иконками */}
      <Section title="DropdownMenu — группы и заголовки">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="outline" color="violet">
              Действия <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content style={{ minWidth: 200 }}>
            <DropdownMenu.Group>
              <DropdownMenu.Label>Файл</DropdownMenu.Label>
              <DropdownMenu.Item onSelect={action('Создать')}>
                <PlusIcon /> Создать новый
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={action('Найти')}>
                <MagnifyingGlassIcon /> Найти
              </DropdownMenu.Item>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />

            <DropdownMenu.Group>
              <DropdownMenu.Label>Правка</DropdownMenu.Label>
              <DropdownMenu.Item onSelect={action('Копировать')}>
                <CopyIcon /> Копировать
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={action('Поделиться')}>
                <Share1Icon /> Поделиться
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={action('Архивировать')}>
                <ArchiveIcon /> Архивировать
              </DropdownMenu.Item>
            </DropdownMenu.Group>

            <DropdownMenu.Separator />

            <DropdownMenu.Item color="red" onSelect={action('Удалить')}>
              <TrashIcon /> Удалить
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Section>

      {/* Меню с подменю */}
      <Section title="DropdownMenu — подменю (Sub)">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft" color="violet">
              С подменю <DropdownMenu.TriggerIcon />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item onSelect={action('Редактировать')}>
              <Pencil1Icon /> Редактировать
            </DropdownMenu.Item>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>
                <Share1Icon /> Поделиться
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item onSelect={action('Ссылка')}>Скопировать ссылку</DropdownMenu.Item>
                <DropdownMenu.Item onSelect={action('Email')}>Отправить по Email</DropdownMenu.Item>
                <DropdownMenu.Item onSelect={action('Telegram')}>Telegram</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger>
                <ArchiveIcon /> Экспорт
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.Item onSelect={action('PDF')}>PDF</DropdownMenu.Item>
                <DropdownMenu.Item onSelect={action('CSV')}>CSV</DropdownMenu.Item>
                <DropdownMenu.Item onSelect={action('JSON')}>JSON</DropdownMenu.Item>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />
            <DropdownMenu.Item color="red" onSelect={action('Удалить')}>
              <TrashIcon /> Удалить
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Section>

      {/* Меню с disabled */}
      <Section title="DropdownMenu — disabled пункты">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="outline">С недоступными <DropdownMenu.TriggerIcon /></Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item onSelect={action('Редактировать')}>Редактировать</DropdownMenu.Item>
            <DropdownMenu.Item disabled>Публиковать (нет прав)</DropdownMenu.Item>
            <DropdownMenu.Item disabled>Удалить (заблокировано)</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item onSelect={action('Архив')}>Архивировать</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Section>

      {/* Варианты триггеров */}
      <Section title="DropdownMenu — варианты триггера">
        <Flex gap="4" align="center" wrap="wrap">
          {/* Три точки горизонтально */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton variant="ghost" color="gray">
                <DotsHorizontalIcon />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onSelect={action('Открыть')}><Pencil1Icon /> Открыть</DropdownMenu.Item>
              <DropdownMenu.Item onSelect={action('Копировать')}><CopyIcon /> Копировать</DropdownMenu.Item>
              <DropdownMenu.Item color="red" onSelect={action('Удалить')}><TrashIcon /> Удалить</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          {/* Три точки вертикально */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <IconButton variant="ghost" color="gray">
                <DotsVerticalIcon />
              </IconButton>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item onSelect={action('Открыть')}><Pencil1Icon /> Открыть</DropdownMenu.Item>
              <DropdownMenu.Item onSelect={action('Копировать')}><CopyIcon /> Копировать</DropdownMenu.Item>
              <DropdownMenu.Item color="red" onSelect={action('Удалить')}><TrashIcon /> Удалить</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          {/* Аватар-меню пользователя */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button variant="ghost" color="gray">
                <PersonIcon /> Алексей <DropdownMenu.TriggerIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Label>alex.ivanov@example.com</DropdownMenu.Label>
              <DropdownMenu.Separator />
              <DropdownMenu.Item onSelect={action('Профиль')}><PersonIcon /> Профиль</DropdownMenu.Item>
              <DropdownMenu.Item onSelect={action('Настройки')}><GearIcon /> Настройки</DropdownMenu.Item>
              <DropdownMenu.Separator />
              <DropdownMenu.Item color="red" onSelect={action('Выйти')}><ExitIcon /> Выйти</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </Flex>
      </Section>

      {/* Размеры */}
      <Section title="DropdownMenu — размеры (size)">
        <Flex gap="4" wrap="wrap">
          {(['1', '2'] as const).map((size) => (
            <DropdownMenu.Root key={size}>
              <DropdownMenu.Trigger>
                <Button variant="soft" color="violet" size={size}>
                  size={size} <DropdownMenu.TriggerIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content size={size}>
                <DropdownMenu.Item>Пункт один</DropdownMenu.Item>
                <DropdownMenu.Item>Пункт два</DropdownMenu.Item>
                <DropdownMenu.Item>Пункт три</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          ))}
        </Flex>
      </Section>
    </Box>
  );
};
