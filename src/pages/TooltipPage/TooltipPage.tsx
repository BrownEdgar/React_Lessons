// Страница Tooltip — подсказки при наведении курсора
// Tooltip появляется через задержку, поддерживает все стороны и выравнивания
// Docs: https://www.radix-ui.com/themes/docs/components/tooltip

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
  GearIcon,
  InfoCircledIcon,
  PlusIcon,
  TrashIcon,
  Pencil1Icon,
  CopyIcon,
  Share1Icon,
  DownloadIcon,
  HeartIcon,
  BookmarkIcon,
} from '@radix-ui/react-icons';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const TooltipPage = () => (
  <Box p="6" style={{ maxWidth: 900 }}>
    <Heading size="8" mb="2">
      Tooltip
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      Подсказки при наведении — стороны, задержка, кастомный контент
    </Text>

    {/* Базовые примеры */}
    <Section title="Базовые Tooltip">
      <Flex gap="4" wrap="wrap" align="center">
        <Tooltip content="Это обычный tooltip">
          <Button variant="soft" color="violet">Наведи на меня</Button>
        </Tooltip>

        <Tooltip content="Копировать в буфер обмена">
          <IconButton variant="soft" color="gray">
            <CopyIcon />
          </IconButton>
        </Tooltip>

        <Tooltip content="Удалить запись без возможности восстановления">
          <IconButton variant="soft" color="red">
            <TrashIcon />
          </IconButton>
        </Tooltip>

        <Tooltip content="Редактировать">
          <IconButton variant="soft" color="blue">
            <Pencil1Icon />
          </IconButton>
        </Tooltip>
      </Flex>
    </Section>

    {/* Стороны (side) */}
    <Section title="Tooltip — стороны (side)">
      <Flex gap="4" justify="center" p="8" wrap="wrap">
        {(['top', 'bottom', 'left', 'right'] as const).map((side) => (
          <Tooltip key={side} content={`side="${side}"`} side={side}>
            <Button variant="outline" color="violet" style={{ width: 110 }}>
              {side}
            </Button>
          </Tooltip>
        ))}
      </Flex>
    </Section>

    {/* Выравнивание (align) */}
    <Section title="Tooltip — выравнивание (align)">
      <Flex gap="4" justify="center" p="4" wrap="wrap">
        {(['start', 'center', 'end'] as const).map((align) => (
          <Tooltip key={align} content={`align="${align}" — ${align === 'start' ? 'начало' : align === 'center' ? 'центр' : 'конец'}`} align={align}>
            <Button variant="outline" color="violet" style={{ width: 120 }}>
              {align}
            </Button>
          </Tooltip>
        ))}
      </Flex>
    </Section>

    {/* Задержка */}
    <Section title="Tooltip — задержка (delayDuration)">
      <Flex gap="4" wrap="wrap">
        <Tooltip content="Без задержки (0ms)" delayDuration={0}>
          <Button variant="soft">0ms</Button>
        </Tooltip>
        <Tooltip content="Задержка 300ms" delayDuration={300}>
          <Button variant="soft">300ms (по умолчанию)</Button>
        </Tooltip>
        <Tooltip content="Задержка 1000ms" delayDuration={1000}>
          <Button variant="soft">1000ms</Button>
        </Tooltip>
      </Flex>
    </Section>

    {/* Тулбар с tooltip на каждой кнопке */}
    <Section title="Реальный пример — тулбар редактора">
      <Box
        p="2"
        style={{
          border: '1px solid var(--gray-4)',
          borderRadius: 'var(--radius-3)',
          display: 'inline-flex',
          gap: '4px',
        }}
      >
        {[
          { icon: <CopyIcon />, label: 'Копировать' },
          { icon: <Pencil1Icon />, label: 'Редактировать' },
          { icon: <Share1Icon />, label: 'Поделиться' },
          { icon: <DownloadIcon />, label: 'Скачать' },
          { icon: <HeartIcon />, label: 'В избранное' },
          { icon: <BookmarkIcon />, label: 'Сохранить' },
          { icon: <GearIcon />, label: 'Настройки' },
        ].map(({ icon, label }) => (
          <Tooltip key={label} content={label} delayDuration={100}>
            <IconButton variant="ghost" color="gray" size="2">
              {icon}
            </IconButton>
          </Tooltip>
        ))}
      </Box>
    </Section>

    {/* Tooltip на тексте */}
    <Section title="Tooltip на inline-тексте">
      <Text size="3">
        Наведи на{' '}
        <Tooltip content="Feature-Sliced Design — архитектурная методология">
          <Text
            color="violet"
            style={{ textDecoration: 'underline dotted', cursor: 'help' }}
          >
            FSD
          </Text>
        </Tooltip>
        {' '}или на{' '}
        <Tooltip content="Radix Primitives — unstyled, accessible components">
          <Text
            color="blue"
            style={{ textDecoration: 'underline dotted', cursor: 'help' }}
          >
            Radix Primitives
          </Text>
        </Tooltip>
        {' '}для пояснения термина.
      </Text>
    </Section>

    {/* Grid с карточками-действиями */}
    <Section title="Tooltip + Grid — панель действий">
      <Grid columns={{ initial: '2', sm: '4' }} gap="3" style={{ maxWidth: 500 }}>
        {[
          { icon: <PlusIcon />, label: 'Создать новый элемент', color: 'violet' as const },
          { icon: <CopyIcon />, label: 'Дублировать', color: 'blue' as const },
          { icon: <Share1Icon />, label: 'Экспортировать', color: 'green' as const },
          { icon: <TrashIcon />, label: 'Удалить навсегда', color: 'red' as const },
        ].map(({ icon, label, color }) => (
          <Tooltip key={label} content={label} delayDuration={100}>
            <Button variant="soft" color={color} style={{ justifyContent: 'center' }}>
              <Flex align="center" gap="1">
                {icon}
                <Text size="1">{label.split(' ')[0]}</Text>
              </Flex>
            </Button>
          </Tooltip>
        ))}
      </Grid>
    </Section>

    {/* Tooltip с иконкой info */}
    <Section title="Tooltip — иконка с подсказкой">
      <Flex gap="6" wrap="wrap">
        {[
          { label: 'Имя пользователя', hint: 'От 3 до 20 символов, только латиница и цифры' },
          { label: 'Email', hint: 'Используется для входа и восстановления пароля' },
          { label: 'Роль', hint: 'Admin — полный доступ, Editor — редактирование, Viewer — только чтение' },
        ].map(({ label, hint }) => (
          <Flex key={label} align="center" gap="1">
            <Text size="2" weight="medium">{label}</Text>
            <Tooltip content={hint}>
              <InfoCircledIcon style={{ color: 'var(--gray-9)', cursor: 'help' }} />
            </Tooltip>
          </Flex>
        ))}
      </Flex>
    </Section>
  </Box>
);
