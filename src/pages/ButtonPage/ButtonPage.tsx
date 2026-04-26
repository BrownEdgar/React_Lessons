// Страница Button + IconButton — все варианты, размеры, цвета, состояния кнопок
// Docs: https://www.radix-ui.com/themes/docs/components/button
// Docs: https://www.radix-ui.com/themes/docs/components/icon-button

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  IconButton,
  Separator,
  Text,
  Tooltip,
} from '@radix-ui/themes';
import {
  PlusIcon,
  TrashIcon,
  Pencil1Icon,
  DownloadIcon,
  Share1Icon,
  HeartIcon,
  BookmarkIcon,
  GearIcon,
  MagnifyingGlassIcon,
  BellIcon,
  PersonIcon,
  CheckIcon,
  Cross1Icon,
  ArrowRightIcon,
  ReloadIcon,
  StarFilledIcon,
  LockClosedIcon,
} from '@radix-ui/react-icons';

type RadixColor =
  | 'violet' | 'blue' | 'green' | 'red' | 'orange'
  | 'yellow' | 'cyan' | 'pink' | 'gray' | 'indigo';

const ALL_COLORS: RadixColor[] = [
  'violet', 'blue', 'green', 'red', 'orange',
  'yellow', 'cyan', 'pink', 'gray', 'indigo',
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const ButtonPage = () => (
  <Box p="6" style={{ maxWidth: 900 }}>
    <Heading size="8" mb="2">
      Button + IconButton
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      Все варианты, размеры, цвета, состояния кнопок и иконок
    </Text>

    {/* Варианты Button */}
    <Section title="Button — варианты (variant)">
      <Flex gap="3" wrap="wrap" align="center">
        <Button variant="solid" color="violet">solid</Button>
        <Button variant="soft" color="violet">soft</Button>
        <Button variant="outline" color="violet">outline</Button>
        <Button variant="ghost" color="violet">ghost</Button>
        <Button variant="surface" color="violet">surface</Button>
        <Button variant="classic" color="violet">classic</Button>
      </Flex>
    </Section>

    {/* Размеры Button */}
    <Section title="Button — размеры (size)">
      <Flex gap="3" align="center" wrap="wrap">
        <Button size="1" color="violet">size 1</Button>
        <Button size="2" color="violet">size 2 (default)</Button>
        <Button size="3" color="violet">size 3</Button>
        <Button size="4" color="violet">size 4</Button>
      </Flex>
    </Section>

    {/* Все цвета */}
    <Section title="Button — все цвета">
      <Flex gap="2" wrap="wrap">
        {ALL_COLORS.map((color) => (
          <Button key={color} color={color} variant="solid" size="2">
            {color}
          </Button>
        ))}
      </Flex>
      <Flex gap="2" wrap="wrap" mt="3">
        {ALL_COLORS.map((color) => (
          <Button key={color} color={color} variant="soft" size="2">
            {color}
          </Button>
        ))}
      </Flex>
    </Section>

    {/* Button с иконками */}
    <Section title="Button — с иконками">
      <Flex gap="3" wrap="wrap" align="center">
        <Button color="violet">
          <PlusIcon /> Создать
        </Button>
        <Button color="blue" variant="soft">
          <DownloadIcon /> Скачать
        </Button>
        <Button color="green" variant="outline">
          <CheckIcon /> Подтвердить
        </Button>
        <Button color="red" variant="soft">
          <TrashIcon /> Удалить
        </Button>
        <Button color="orange" variant="outline">
          <Share1Icon /> Поделиться
        </Button>
        <Button color="violet" variant="ghost">
          Далее <ArrowRightIcon />
        </Button>
      </Flex>
    </Section>

    {/* Состояния */}
    <Section title="Button — состояния">
      <Flex gap="3" wrap="wrap" align="center">
        <Button color="violet">Обычная</Button>
        <Button color="violet" disabled>Disabled</Button>
        <Button color="violet" loading>Loading</Button>
        <Button color="green" loading>Сохранение...</Button>
        <Button color="red" loading>Удаление...</Button>
      </Flex>
    </Section>

    {/* Высококонтрастный */}
    <Section title="Button — высокий контраст (highContrast)">
      <Flex gap="3" wrap="wrap">
        {(['solid', 'soft', 'outline'] as const).map((variant) => (
          <Flex key={variant} direction="column" gap="2">
            <Button color="violet" variant={variant}>{variant}</Button>
            <Button color="violet" variant={variant} highContrast>{variant} (highContrast)</Button>
          </Flex>
        ))}
      </Flex>
    </Section>

    {/* Radius */}
    <Section title="Button — скругление (radius)">
      <Flex gap="3" wrap="wrap" align="center">
        {(['none', 'small', 'medium', 'large', 'full'] as const).map((radius) => (
          <Button key={radius} color="violet" variant="solid" radius={radius}>
            {radius}
          </Button>
        ))}
      </Flex>
    </Section>

    {/* Полная ширина */}
    <Section title="Button — полная ширина">
      <Flex direction="column" gap="2" style={{ maxWidth: 400 }}>
        <Button color="violet" style={{ width: '100%' }}>
          Войти в аккаунт
        </Button>
        <Button color="gray" variant="outline" style={{ width: '100%' }}>
          Войти через Google
        </Button>
        <Button color="gray" variant="ghost" style={{ width: '100%' }}>
          Забыли пароль?
        </Button>
      </Flex>
    </Section>

    {/* Разделитель */}
    <Separator size="4" my="2" />

    {/* IconButton варианты */}
    <Section title="IconButton — варианты">
      <Flex gap="3" wrap="wrap" align="center">
        <IconButton variant="solid" color="violet"><GearIcon /></IconButton>
        <IconButton variant="soft" color="violet"><GearIcon /></IconButton>
        <IconButton variant="outline" color="violet"><GearIcon /></IconButton>
        <IconButton variant="ghost" color="violet"><GearIcon /></IconButton>
        <IconButton variant="surface" color="violet"><GearIcon /></IconButton>
        <IconButton variant="classic" color="violet"><GearIcon /></IconButton>
      </Flex>
    </Section>

    {/* IconButton размеры */}
    <Section title="IconButton — размеры">
      <Flex gap="3" align="center" wrap="wrap">
        <IconButton size="1" color="violet"><PlusIcon /></IconButton>
        <IconButton size="2" color="violet"><PlusIcon /></IconButton>
        <IconButton size="3" color="violet"><PlusIcon /></IconButton>
        <IconButton size="4" color="violet"><PlusIcon /></IconButton>
      </Flex>
    </Section>

    {/* IconButton все цвета */}
    <Section title="IconButton — цвета">
      <Flex gap="2" wrap="wrap">
        {ALL_COLORS.map((color) => (
          <IconButton key={color} color={color} variant="soft">
            <StarFilledIcon />
          </IconButton>
        ))}
      </Flex>
    </Section>

    {/* IconButton с Tooltip */}
    <Section title="IconButton + Tooltip — тулбар">
      <Flex
        p="2"
        gap="1"
        style={{
          border: '1px solid var(--gray-4)',
          borderRadius: 'var(--radius-3)',
          display: 'inline-flex',
        }}
      >
        {[
          { icon: <PlusIcon />, label: 'Создать', color: 'violet' as const },
          { icon: <Pencil1Icon />, label: 'Редактировать', color: 'blue' as const },
          { icon: <MagnifyingGlassIcon />, label: 'Найти', color: 'gray' as const },
          { icon: <DownloadIcon />, label: 'Скачать', color: 'green' as const },
          { icon: <Share1Icon />, label: 'Поделиться', color: 'orange' as const },
          { icon: <HeartIcon />, label: 'В избранное', color: 'pink' as const },
          { icon: <BookmarkIcon />, label: 'Сохранить', color: 'indigo' as const },
          { icon: <BellIcon />, label: 'Уведомления', color: 'yellow' as const },
          { icon: <PersonIcon />, label: 'Профиль', color: 'cyan' as const },
          { icon: <ReloadIcon />, label: 'Обновить', color: 'gray' as const },
          { icon: <LockClosedIcon />, label: 'Заблокировать', color: 'gray' as const, disabled: true },
          { icon: <Cross1Icon />, label: 'Закрыть', color: 'red' as const },
        ].map(({ icon, label, color, disabled }) => (
          <Tooltip key={label} content={label} delayDuration={100}>
            <IconButton variant="ghost" color={color} size="2" disabled={disabled}>
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Flex>
    </Section>

    {/* Реальный пример — кнопки действий формы */}
    <Section title="Реальные примеры использования">
      <Grid columns={{ initial: '1', sm: '2' }} gap="5">
        {/* Форма входа */}
        <Box p="4" style={{ border: '1px solid var(--gray-4)', borderRadius: 'var(--radius-3)' }}>
          <Text weight="bold" size="3" mb="4" as="div">Форма входа</Text>
          <Flex direction="column" gap="2">
            <Button color="violet" size="3" style={{ width: '100%' }}>
              <PersonIcon /> Войти
            </Button>
            <Button color="gray" variant="outline" size="3" style={{ width: '100%' }}>
              Продолжить с Google
            </Button>
            <Button variant="ghost" color="gray" style={{ width: '100%' }}>
              Зарегистрироваться
            </Button>
          </Flex>
        </Box>

        {/* Панель управления */}
        <Box p="4" style={{ border: '1px solid var(--gray-4)', borderRadius: 'var(--radius-3)' }}>
          <Text weight="bold" size="3" mb="4" as="div">Панель управления записью</Text>
          <Flex gap="2" wrap="wrap">
            <Button size="2" color="violet">
              <Pencil1Icon /> Изменить
            </Button>
            <Button size="2" color="blue" variant="soft">
              <CopyIconBtn /> Дублировать
            </Button>
            <Button size="2" color="orange" variant="outline">
              <ArchiveIconBtn /> Архив
            </Button>
            <Button size="2" color="red" variant="soft">
              <TrashIcon /> Удалить
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Section>
  </Box>
);

// Иконки-обёртки для читаемости (эти не импортированы из Radix Icons)
const CopyIconBtn = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 13 12.7762 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);

const ArchiveIconBtn = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M1.5 2C1.22386 2 1 2.22386 1 2.5V4.5C1 4.77614 1.22386 5 1.5 5H2V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V5H13.5C13.7761 5 14 4.77614 14 4.5V2.5C14 2.22386 13.7761 2 13.5 2H1.5ZM2 5H13V12H2V5ZM6 7C6 6.72386 6.22386 6.5 6.5 6.5H8.5C8.77614 6.5 9 6.72386 9 7C9 7.27614 8.77614 7.5 8.5 7.5H6.5C6.22386 7.5 6 7.27614 6 7ZM2 3H13V4H2V3Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
