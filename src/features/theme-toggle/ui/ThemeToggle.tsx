// Переключатель темы — Radix Switch с иконками солнца и луны
// Docs: https://www.radix-ui.com/themes/docs/components/switch

import { Flex, Switch, Text } from '@radix-ui/themes';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useThemeStore } from '../model/useThemeStore';

export const ThemeToggle = () => {
  const { appearance, toggleAppearance } = useThemeStore();

  return (
    <Flex align="center" gap="2" asChild>
      <label style={{ cursor: 'pointer' }}>
        <SunIcon />
        <Switch
          checked={appearance === 'dark'}
          onCheckedChange={toggleAppearance}
          size="2"
          color="violet"
        />
        <MoonIcon />
        <Text size="1" color="gray">
          {appearance === 'dark' ? 'Тёмная' : 'Светлая'}
        </Text>
      </label>
    </Flex>
  );
};
