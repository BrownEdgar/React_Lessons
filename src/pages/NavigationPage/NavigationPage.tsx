// Страница Navigation — Tabs и SegmentedControl компоненты Radix UI
// Docs: https://www.radix-ui.com/themes/docs/components/tabs
// Docs: https://www.radix-ui.com/themes/docs/components/segmented-control

import {
  Box,
  Callout,
  Card,
  Flex,
  Grid,
  Heading,
  SegmentedControl,
  Separator,
  Tabs,
  Text,
} from '@radix-ui/themes';
import {
  GridIcon,
  ListBulletIcon,
  InfoCircledIcon,
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

const TabContent = ({ label }: { label: string }) => (
  <Card mt="3">
    <Text size="2" color="gray">
      Контент вкладки <Text weight="bold" color="violet">«{label}»</Text>.
      Каждая вкладка рендерит свой контент — неактивные вкладки не рендерятся в DOM.
    </Text>
  </Card>
);

export const NavigationPage = () => {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <Box p="6" style={{ maxWidth: 800 }}>
      <Heading size="8" mb="2">
        Navigation & Tabs
      </Heading>
      <Text size="3" color="gray" mb="6" as="p">
        Tabs и SegmentedControl — переключение контента
      </Text>

      {/* Базовые Tabs */}
      <Section title="Tabs — базовый пример">
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Trigger value="account">Аккаунт</Tabs.Trigger>
            <Tabs.Trigger value="security">Безопасность</Tabs.Trigger>
            <Tabs.Trigger value="notifications">Уведомления</Tabs.Trigger>
            <Tabs.Trigger value="billing">Оплата</Tabs.Trigger>
          </Tabs.List>
          <Box pt="3">
            <Tabs.Content value="account">
              <TabContent label="Аккаунт" />
            </Tabs.Content>
            <Tabs.Content value="security">
              <TabContent label="Безопасность" />
            </Tabs.Content>
            <Tabs.Content value="notifications">
              <TabContent label="Уведомления" />
            </Tabs.Content>
            <Tabs.Content value="billing">
              <TabContent label="Оплата" />
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Section>

      {/* Tabs с контентом */}
      <Section title="Tabs — с насыщенным контентом">
        <Tabs.Root defaultValue="overview">
          <Tabs.List size="2">
            <Tabs.Trigger value="overview">Обзор</Tabs.Trigger>
            <Tabs.Trigger value="details">Детали</Tabs.Trigger>
            <Tabs.Trigger value="disabled" disabled>Недоступна</Tabs.Trigger>
          </Tabs.List>
          <Box pt="4">
            <Tabs.Content value="overview">
              <Flex direction="column" gap="3">
                <Text size="3">
                  Вкладка <Text weight="bold">«Обзор»</Text> — первая по умолчанию.
                </Text>
                <Grid columns="3" gap="3">
                  {['Компонентов', 'Примеров', 'Страниц'].map((label, i) => (
                    <Card key={label}>
                      <Text size="5" weight="bold" color="violet" as="div">{(i + 1) * 8}</Text>
                      <Text size="1" color="gray">{label}</Text>
                    </Card>
                  ))}
                </Grid>
              </Flex>
            </Tabs.Content>
            <Tabs.Content value="details">
              <Callout.Root color="blue" variant="soft">
                <Callout.Icon><InfoCircledIcon /></Callout.Icon>
                <Callout.Text>
                  Вкладка <Text weight="bold">«Детали»</Text> активна.
                  Третья вкладка задизейблена через prop disabled.
                </Callout.Text>
              </Callout.Root>
            </Tabs.Content>
          </Box>
        </Tabs.Root>
      </Section>

      {/* SegmentedControl */}
      <Section title="SegmentedControl — переключатель режима отображения">
        <Flex direction="column" gap="4">
          <SegmentedControl.Root
            value={viewMode}
            onValueChange={setViewMode}
          >
            <SegmentedControl.Item value="grid">
              <Flex align="center" gap="1">
                <GridIcon />
                <Text size="1">Сетка</Text>
              </Flex>
            </SegmentedControl.Item>
            <SegmentedControl.Item value="list">
              <Flex align="center" gap="1">
                <ListBulletIcon />
                <Text size="1">Список</Text>
              </Flex>
            </SegmentedControl.Item>
          </SegmentedControl.Root>

          <Card>
            <Text size="2" color="gray">
              Текущий режим: <Text weight="bold" color="violet">{viewMode}</Text>
            </Text>
            <Text size="1" color="gray" mt="1" as="div">
              SegmentedControl — управляемый компонент, состояние хранится в useState
            </Text>
          </Card>
        </Flex>
      </Section>

      {/* SegmentedControl размеры */}
      <Section title="SegmentedControl — варианты размеров">
        <Flex direction="column" gap="3">
          {(['1', '2', '3'] as const).map((size) => (
            <SegmentedControl.Root key={size} defaultValue="a" size={size}>
              <SegmentedControl.Item value="a">Вариант A</SegmentedControl.Item>
              <SegmentedControl.Item value="b">Вариант B</SegmentedControl.Item>
              <SegmentedControl.Item value="c">Вариант C</SegmentedControl.Item>
            </SegmentedControl.Root>
          ))}
        </Flex>
      </Section>
    </Box>
  );
};
