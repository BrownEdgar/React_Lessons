// Страница Badges & Callouts — все цвета, размеры и варианты Badge + Callout компоненты
// Docs: https://www.radix-ui.com/themes/docs/components/badge
// Docs: https://www.radix-ui.com/themes/docs/components/callout

import {
  Badge,
  Box,
  Callout,
  Flex,
  Heading,
  Separator,
  Text,
} from '@radix-ui/themes';
import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
  InfoCircledIcon,
  StarFilledIcon,
  LockClosedIcon,
  RocketIcon,
} from '@radix-ui/react-icons';

type RadixColor =
  | 'tomato' | 'red' | 'ruby' | 'crimson' | 'pink' | 'plum' | 'purple' | 'violet'
  | 'iris' | 'indigo' | 'blue' | 'cyan' | 'teal' | 'jade' | 'green' | 'grass'
  | 'brown' | 'orange' | 'sky' | 'mint' | 'lime' | 'yellow' | 'amber' | 'gold' | 'bronze' | 'gray';

const ALL_COLORS: RadixColor[] = [
  'tomato', 'red', 'ruby', 'crimson', 'pink', 'plum', 'purple', 'violet',
  'iris', 'indigo', 'blue', 'cyan', 'teal', 'jade', 'green', 'grass',
  'brown', 'orange', 'sky', 'mint', 'lime', 'yellow', 'amber', 'gold', 'bronze', 'gray',
];

const BADGE_VARIANTS = ['solid', 'soft', 'surface', 'outline'] as const;

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

export const BadgesPage = () => (
  <Box p="6" style={{ maxWidth: 900 }}>
    <Heading size="8" mb="2">
      Badges & Callouts
    </Heading>
    <Text size="3" color="gray" mb="6" as="p">
      Badge — все 26 цветов, 4 варианта, 2 размера. Callout — системные сообщения.
    </Text>

    {/* Все цвета Badge */}
    <Section title="Badge — все 26 цветов (variant=solid)">
      <Flex gap="2" wrap="wrap">
        {ALL_COLORS.map((color) => (
          <Badge key={color} color={color} variant="solid" size="2">
            {color}
          </Badge>
        ))}
      </Flex>
    </Section>

    {/* Варианты */}
    <Section title="Badge — 4 варианта">
      <Flex direction="column" gap="3">
        {BADGE_VARIANTS.map((variant) => (
          <Box key={variant}>
            <Text size="1" color="gray" mb="2" style={{ display: 'block' }}>
              variant=&quot;{variant}&quot;
            </Text>
            <Flex gap="2" wrap="wrap">
              {(['violet', 'green', 'red', 'orange', 'blue', 'gray'] as RadixColor[]).map((color) => (
                <Badge key={color} color={color} variant={variant} size="2">
                  {color}
                </Badge>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    </Section>

    {/* Размеры Badge */}
    <Section title="Badge — размеры">
      <Flex gap="3" align="center">
        <Badge size="1" color="violet">size=1</Badge>
        <Badge size="2" color="violet">size=2 (по умолчанию)</Badge>
        <Badge size="3" color="violet">size=3</Badge>
      </Flex>
    </Section>

    {/* Badge с иконками */}
    <Section title="Badge — с иконками Radix">
      <Flex gap="2" wrap="wrap">
        <Badge color="green" size="2">
          <CheckCircledIcon />
          Активен
        </Badge>
        <Badge color="red" size="2">
          <CrossCircledIcon />
          Ошибка
        </Badge>
        <Badge color="orange" size="2">
          <ExclamationTriangleIcon />
          Внимание
        </Badge>
        <Badge color="blue" size="2">
          <InfoCircledIcon />
          Инфо
        </Badge>
        <Badge color="yellow" size="2">
          <StarFilledIcon />
          Премиум
        </Badge>
        <Badge color="violet" size="2">
          <RocketIcon />
          Новое
        </Badge>
        <Badge color="gray" size="2">
          <LockClosedIcon />
          Заблокирован
        </Badge>
      </Flex>
    </Section>

    {/* Callout варианты */}
    <Section title="Callout — системные сообщения">
      <Flex direction="column" gap="3">
        <Callout.Root color="green">
          <Callout.Icon><CheckCircledIcon /></Callout.Icon>
          <Callout.Text>
            <Text weight="bold">Успешно!</Text> Операция выполнена без ошибок.
          </Callout.Text>
        </Callout.Root>

        <Callout.Root color="red">
          <Callout.Icon><CrossCircledIcon /></Callout.Icon>
          <Callout.Text>
            <Text weight="bold">Ошибка!</Text> Не удалось сохранить данные. Попробуйте снова.
          </Callout.Text>
        </Callout.Root>

        <Callout.Root color="orange">
          <Callout.Icon><ExclamationTriangleIcon /></Callout.Icon>
          <Callout.Text>
            <Text weight="bold">Предупреждение.</Text> Это действие необратимо.
          </Callout.Text>
        </Callout.Root>

        <Callout.Root color="blue">
          <Callout.Icon><InfoCircledIcon /></Callout.Icon>
          <Callout.Text>
            <Text weight="bold">Информация.</Text> Доступна новая версия компонента.
          </Callout.Text>
        </Callout.Root>
      </Flex>
    </Section>

    {/* Callout варианты (soft/surface/outline) */}
    <Section title="Callout — варианты отображения">
      <Flex direction="column" gap="3">
        {(['soft', 'surface', 'outline'] as const).map((variant) => (
          <Callout.Root key={variant} color="violet" variant={variant}>
            <Callout.Icon><InfoCircledIcon /></Callout.Icon>
            <Callout.Text>
              Callout variant=&quot;{variant}&quot; — цвет violet
            </Callout.Text>
          </Callout.Root>
        ))}
      </Flex>
    </Section>
  </Box>
);
