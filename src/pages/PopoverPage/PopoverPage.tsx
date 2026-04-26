// Страница Popover — всплывающие панели с произвольным контентом
// Popover позиционируется относительно триггера, поддерживает фокус-трап
// Docs: https://www.radix-ui.com/themes/docs/components/popover

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Popover,
  RadioGroup,
  Separator,
  Switch,
  Text,
  TextField,
} from '@radix-ui/themes';
import {
  GearIcon,
  MixerHorizontalIcon,
  PersonIcon,
  ChatBubbleIcon,
  BellIcon,
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

export const PopoverPage = () => {
  const [sortBy, setSortBy] = useState('name');
  const [showInactive, setShowInactive] = useState(false);

  return (
    <Box p="6" style={{ maxWidth: 900 }}>
      <Heading size="8" mb="2">
        Popover
      </Heading>
      <Text size="3" color="gray" mb="6" as="p">
        Всплывающие панели с произвольным контентом — формы, фильтры, настройки
      </Text>

      {/* Базовый Popover */}
      <Section title="Базовый Popover">
        <Flex gap="4" wrap="wrap">
          <Popover.Root>
            <Popover.Trigger>
              <Button variant="soft" color="violet">Открыть popover</Button>
            </Popover.Trigger>
            <Popover.Content style={{ width: 280 }}>
              <Text size="2">
                Это содержимое Popover. Кликни за его пределами — закроется автоматически.
              </Text>
              <Flex justify="end" mt="3">
                <Popover.Close>
                  <Button size="1" variant="soft" color="gray">Закрыть</Button>
                </Popover.Close>
              </Flex>
            </Popover.Content>
          </Popover.Root>

          {/* Стороны */}
          {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
            <Popover.Root key={side}>
              <Popover.Trigger>
                <Button variant="outline" color="violet">{side}</Button>
              </Popover.Trigger>
              <Popover.Content side={side} style={{ width: 180 }}>
                <Text size="2">Popover side=&quot;{side}&quot;</Text>
              </Popover.Content>
            </Popover.Root>
          ))}
        </Flex>
      </Section>

      {/* Popover — форма редактирования профиля */}
      <Section title="Popover — быстрое редактирование профиля">
        <Popover.Root>
          <Popover.Trigger>
            <Button variant="solid" color="violet">
              <PersonIcon />
              Редактировать профиль
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 340 }}>
            <Heading size="3" mb="3">Профиль</Heading>
            <Flex direction="column" gap="3">
              <Box>
                <Text as="div" size="2" weight="medium" mb="1">Имя</Text>
                <TextField.Root defaultValue="Алексей Иванов" />
              </Box>
              <Box>
                <Text as="div" size="2" weight="medium" mb="1">Email</Text>
                <TextField.Root defaultValue="alex.ivanov@example.com" type="email" />
              </Box>
              <Box>
                <Text as="div" size="2" weight="medium" mb="1">Отдел</Text>
                <TextField.Root defaultValue="Инженерия" />
              </Box>
            </Flex>
            <Flex gap="2" mt="4" justify="end">
              <Popover.Close>
                <Button variant="soft" color="gray" size="2">Отмена</Button>
              </Popover.Close>
              <Popover.Close>
                <Button color="violet" size="2">Сохранить</Button>
              </Popover.Close>
            </Flex>
          </Popover.Content>
        </Popover.Root>
      </Section>

      {/* Popover — фильтры */}
      <Section title="Popover — панель фильтров">
        <Popover.Root>
          <Popover.Trigger>
            <Button variant="outline" color="violet">
              <MixerHorizontalIcon />
              Фильтры
            </Button>
          </Popover.Trigger>
          <Popover.Content style={{ width: 280 }}>
            <Heading size="3" mb="3">Настройка фильтров</Heading>

            <Box mb="3">
              <Text as="div" size="2" weight="medium" mb="2">Сортировка</Text>
              <RadioGroup.Root value={sortBy} onValueChange={setSortBy} color="violet">
                <Flex direction="column" gap="1">
                  {[
                    { value: 'name', label: 'По имени' },
                    { value: 'date', label: 'По дате' },
                    { value: 'role', label: 'По роли' },
                  ].map(({ value, label }) => (
                    <Flex key={value} align="center" gap="2">
                      <RadioGroup.Item value={value} id={`sort-${value}`} />
                      <Text as="label" htmlFor={`sort-${value}`} size="2">{label}</Text>
                    </Flex>
                  ))}
                </Flex>
              </RadioGroup.Root>
            </Box>

            <Separator size="4" my="3" />

            <Flex align="center" justify="between">
              <Text size="2">Показать неактивных</Text>
              <Switch
                checked={showInactive}
                onCheckedChange={setShowInactive}
                size="1"
                color="violet"
              />
            </Flex>

            <Flex gap="2" mt="4">
              <Popover.Close>
                <Button size="2" color="violet" style={{ flex: 1 }}>Применить</Button>
              </Popover.Close>
            </Flex>
            <Text size="1" color="gray" mt="2" style={{ display: 'block' }}>
              Сортировка: <Text weight="bold">{sortBy}</Text> ·{' '}
              Неактивные: <Text weight="bold">{showInactive ? 'да' : 'нет'}</Text>
            </Text>
          </Popover.Content>
        </Popover.Root>
      </Section>

      {/* Popover — настройки через IconButton */}
      <Section title="Popover — иконка настроек">
        <Grid columns={{ initial: '1', sm: '3' }} gap="4" style={{ maxWidth: 600 }}>
          {[
            { icon: <GearIcon />, title: 'Настройки', desc: 'Управление параметрами приложения' },
            { icon: <ChatBubbleIcon />, title: 'Обратная связь', desc: 'Отправить отзыв команде' },
            { icon: <BellIcon />, title: 'Уведомления', desc: 'Управление подписками' },
          ].map(({ icon, title, desc }) => (
            <Popover.Root key={title}>
              <Popover.Trigger>
                <Box
                  p="3"
                  style={{
                    border: '1px solid var(--gray-4)',
                    borderRadius: 'var(--radius-3)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <IconButton variant="soft" color="violet" size="2" asChild>
                    <span>{icon}</span>
                  </IconButton>
                  <Text size="2" weight="medium">{title}</Text>
                </Box>
              </Popover.Trigger>
              <Popover.Content style={{ width: 260 }}>
                <Text weight="bold" size="2" as="div" mb="1">{title}</Text>
                <Text size="2" color="gray">{desc}</Text>
                <Flex justify="end" mt="3">
                  <Popover.Close>
                    <Button size="1" color="violet">Открыть</Button>
                  </Popover.Close>
                </Flex>
              </Popover.Content>
            </Popover.Root>
          ))}
        </Grid>
      </Section>
    </Box>
  );
};
