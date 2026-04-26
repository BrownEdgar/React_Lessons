// Страница Typography — демонстрирует все текстовые компоненты Radix UI
// Heading (9 размеров), Text (9 размеров), Code, Em, Strong, Kbd, Link, Quote, Blockquote
// Docs: https://www.radix-ui.com/themes/docs/components/text
// Docs: https://www.radix-ui.com/themes/docs/components/heading
// Docs: https://www.radix-ui.com/themes/docs/components/blockquote
// Docs: https://www.radix-ui.com/themes/docs/components/code
// Docs: https://www.radix-ui.com/themes/docs/components/kbd

import {
  Blockquote,
  Box,
  Code,
  Em,
  Flex,
  Heading,
  Kbd,
  Link,
  Quote,
  Separator,
  Strong,
  Text,
} from '@radix-ui/themes';

const HEADING_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const TEXT_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;
const WEIGHTS = ['light', 'regular', 'medium', 'bold'] as const;
const COLORS = [
  'tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet',
  'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass', 'orange',
  'amber', 'yellow', 'brown', 'gray',
] as const;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const TypographyPage = () => (
  <Box p="6" style={{ maxWidth: 900 }}>
    <Heading size="8" mb="2">
      Typography
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      Все текстовые компоненты Radix UI Themes
    </Text>

    {/* Heading — все размеры */}
    <Section title="Heading — размеры 1–9">
      <Flex direction="column" gap="2">
        {HEADING_SIZES.map((size) => (
          <Heading key={size} size={size}>
            Heading size={size} — Привет, мир!
          </Heading>
        ))}
      </Flex>
    </Section>

    {/* Text — все размеры */}
    <Section title="Text — размеры 1–9">
      <Flex direction="column" gap="2">
        {TEXT_SIZES.map((size) => (
          <Text key={size} size={size} as="p">
            Text size={size} — Быстрая коричневая лиса прыгает
          </Text>
        ))}
      </Flex>
    </Section>

    {/* Font weights */}
    <Section title="Font Weight">
      <Flex gap="6" wrap="wrap">
        {WEIGHTS.map((weight) => (
          <Text key={weight} size="4" weight={weight}>
            {weight}: Вес шрифта
          </Text>
        ))}
      </Flex>
    </Section>

    {/* Цвета */}
    <Section title="Text Colors">
      <Flex gap="3" wrap="wrap">
        {COLORS.map((color) => (
          <Text key={color} size="2" color={color}>
            {color}
          </Text>
        ))}
      </Flex>
    </Section>

    {/* Inline-элементы */}
    <Section title="Inline Elements">
      <Flex direction="column" gap="3">
        <Text size="3">
          Используйте <Code>console.log()</Code> для отладки кода
        </Text>
        <Text size="3">
          Нажмите <Kbd>⌘</Kbd> + <Kbd>K</Kbd> для открытия поиска
        </Text>
        <Text size="3">
          <Em>Курсив</Em> и <Strong>жирный</Strong> текст в одной строке
        </Text>
        <Text size="3">
          Посетите{' '}
          <Link href="https://www.radix-ui.com/themes" target="_blank">
            radix-ui.com
          </Link>{' '}
          для документации
        </Text>
        <Text size="3">
          Как сказал мудрец: <Quote>Код — это поэзия</Quote>
        </Text>
      </Flex>
    </Section>

    {/* Blockquote */}
    <Section title="Blockquote">
      <Blockquote>
        Feature-Sliced Design — это архитектурная методология для фронтенд-проектов.
        Она помогает командам стандартизировать структуру проекта и делает кодовую базу
        более понятной и поддерживаемой.
      </Blockquote>
    </Section>

    {/* Code варианты */}
    <Section title="Code — варианты">
      <Flex gap="3" wrap="wrap" align="center">
        <Code variant="solid">solid</Code>
        <Code variant="soft">soft</Code>
        <Code variant="outline">outline</Code>
        <Code variant="ghost">ghost</Code>
        <Code color="tomato">tomato</Code>
        <Code color="green">green</Code>
        <Code color="blue">blue</Code>
        <Code size="4">крупный код</Code>
      </Flex>
    </Section>

    {/* Truncate */}
    <Section title="Text Truncate">
      <Box style={{ maxWidth: 300 }}>
        <Text truncate size="3">
          Очень длинный текст, который не помещается в контейнер и будет обрезан с многоточием
        </Text>
      </Box>
    </Section>
  </Box>
);
