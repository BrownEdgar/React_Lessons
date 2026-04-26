// Боковая навигационная панель — содержит ссылки на все разделы и переключатель темы
// Docs: https://www.radix-ui.com/themes/docs/components/flex
// Docs: https://www.radix-ui.com/themes/docs/components/separator

import { Box, Flex, Heading, ScrollArea, Text } from '@radix-ui/themes';
import {
  FontStyleIcon,
  CardStackIcon,
  InputIcon,
  ChatBubbleIcon,
  TableIcon,
  LayoutIcon,
  BadgeIcon,
  ListBulletIcon,
  InfoCircledIcon,
  MixerHorizontalIcon,
  HamburgerMenuIcon,
  SquareIcon,
  ImageIcon,
  SliderIcon,
  CounterClockwiseClockIcon,
  ComponentInstanceIcon,
  RowsIcon,
  ButtonIcon,
} from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';
import { ThemeToggle } from '@features/theme-toggle';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_GROUPS: { group: string; items: NavItem[] }[] = [
  {
    group: 'Текст',
    items: [
      { path: '/typography', label: 'Typography', icon: <FontStyleIcon /> },
    ],
  },
  {
    group: 'Данные',
    items: [
      { path: '/cards', label: 'Cards', icon: <CardStackIcon /> },
      { path: '/tables', label: 'Tables', icon: <TableIcon /> },
      { path: '/datalist', label: 'DataList & Avatar', icon: <ListBulletIcon /> },
    ],
  },
  {
    group: 'Формы',
    items: [
      { path: '/forms', label: 'Forms', icon: <InputIcon /> },
      { path: '/button', label: 'Button & IconButton', icon: <ButtonIcon /> },
      { path: '/slider', label: 'Slider', icon: <SliderIcon /> },
    ],
  },
  {
    group: 'Наложения',
    items: [
      { path: '/dialogs', label: 'Dialogs', icon: <ChatBubbleIcon /> },
      { path: '/tooltip', label: 'Tooltip', icon: <InfoCircledIcon /> },
      { path: '/popover', label: 'Popover', icon: <MixerHorizontalIcon /> },
      { path: '/dropdown', label: 'DropdownMenu', icon: <HamburgerMenuIcon /> },
      { path: '/contextmenu', label: 'ContextMenu', icon: <SquareIcon /> },
      { path: '/hovercard', label: 'HoverCard', icon: <ImageIcon /> },
    ],
  },
  {
    group: 'Навигация',
    items: [
      { path: '/navigation', label: 'Navigation & Tabs', icon: <LayoutIcon /> },
    ],
  },
  {
    group: 'Индикаторы',
    items: [
      { path: '/badges', label: 'Badges & Callouts', icon: <BadgeIcon /> },
      { path: '/progress', label: 'Progress & Spinner', icon: <CounterClockwiseClockIcon /> },
      { path: '/skeleton', label: 'Skeleton', icon: <ComponentInstanceIcon /> },
    ],
  },
  {
    group: 'Контейнеры',
    items: [
      { path: '/scrollarea', label: 'ScrollArea', icon: <RowsIcon /> },
    ],
  },
];

export const AppSidebar = () => (
  <Box
    style={{
      width: 220,
      minHeight: '100vh',
      borderRight: '1px solid var(--gray-4)',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    <Box p="4" style={{ borderBottom: '1px solid var(--gray-4)' }}>
      <Heading size="3" mb="1" color="violet">
        Radix UI
      </Heading>
      <Text size="1" color="gray" mb="3" style={{ display: 'block' }}>
        Учебные примеры
      </Text>
      <ThemeToggle />
    </Box>

    <ScrollArea style={{ flex: 1 }} type="hover">
      <Flex direction="column" p="3" gap="1">
        {NAV_GROUPS.map(({ group, items }) => (
          <Box key={group} mb="2">
            <Text
              size="1"
              weight="bold"
              color="gray"
              style={{ display: 'block', padding: '4px 8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
            >
              {group}
            </Text>
            {items.map(({ path, label, icon }) => (
              <NavLink key={path} to={path} style={{ textDecoration: 'none' }}>
                {({ isActive }) => (
                  <Flex
                    align="center"
                    gap="2"
                    p="2"
                    style={{
                      borderRadius: 'var(--radius-2)',
                      background: isActive ? 'var(--violet-3)' : 'transparent',
                      cursor: 'pointer',
                    }}
                  >
                    <Box style={{ color: isActive ? 'var(--violet-11)' : 'var(--gray-9)', flexShrink: 0 }}>
                      {icon}
                    </Box>
                    <Text
                      size="2"
                      weight={isActive ? 'bold' : 'regular'}
                      style={{ color: isActive ? 'var(--violet-11)' : 'var(--gray-11)' }}
                    >
                      {label}
                    </Text>
                  </Flex>
                )}
              </NavLink>
            ))}
          </Box>
        ))}
      </Flex>
    </ScrollArea>
  </Box>
);
