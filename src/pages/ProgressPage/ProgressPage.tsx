// Страница Progress + Spinner — индикаторы загрузки и прогресса
// Docs: https://www.radix-ui.com/themes/docs/components/progress
// Docs: https://www.radix-ui.com/themes/docs/components/spinner

import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Progress,
  Separator,
  Spinner,
  Text,
} from '@radix-ui/themes';
import { useEffect, useState } from 'react';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box mb="6">
    <Heading size="4" mb="3" color="violet">
      {title}
    </Heading>
    <Separator size="4" mb="4" />
    {children}
  </Box>
);

const useSimulatedProgress = (duration = 3000) => {
  const [value, setValue] = useState(0);
  const [running, setRunning] = useState(false);

  const start = () => {
    setValue(0);
    setRunning(true);
  };

  useEffect(() => {
    if (!running) return;
    if (value >= 100) { setRunning(false); return; }
    const id = setTimeout(() => setValue((v) => Math.min(v + Math.random() * 8 + 2, 100)), duration / 25);
    return () => clearTimeout(id);
  }, [running, value, duration]);

  return { value: Math.round(value), running, start };
};

export const ProgressPage = () => {
  const upload = useSimulatedProgress(4000);
  const install = useSimulatedProgress(5000);

  return (
    <Box p="6" style={{ maxWidth: 700 }}>
      <Heading size="8" mb="2">
        Progress + Spinner
      </Heading>
      <Text size="3" color="gray" mb="6" as="p">
        Полосы прогресса и индикаторы загрузки
      </Text>

      {/* Базовый Progress */}
      <Section title="Progress — статические значения">
        <Flex direction="column" gap="4">
          {[0, 25, 50, 75, 100].map((val) => (
            <Flex key={val} align="center" gap="3">
              <Text size="2" style={{ minWidth: 35 }}>{val}%</Text>
              <Box style={{ flex: 1 }}>
                <Progress value={val} color="violet" />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Section>

      {/* Цвета */}
      <Section title="Progress — цвета">
        <Flex direction="column" gap="3">
          {(
            [
              { color: 'violet', value: 70 },
              { color: 'blue', value: 55 },
              { color: 'green', value: 85 },
              { color: 'red', value: 30 },
              { color: 'orange', value: 60 },
              { color: 'gray', value: 45 },
            ] as const
          ).map(({ color, value }) => (
            <Flex key={color} align="center" gap="3">
              <Text size="2" style={{ minWidth: 55 }}>{color}</Text>
              <Box style={{ flex: 1 }}>
                <Progress value={value} color={color} />
              </Box>
              <Text size="2" color="gray" style={{ minWidth: 35 }}>{value}%</Text>
            </Flex>
          ))}
        </Flex>
      </Section>

      {/* Размеры */}
      <Section title="Progress — размеры (size)">
        <Flex direction="column" gap="4">
          {(['1', '2', '3'] as const).map((size) => (
            <Flex key={size} align="center" gap="3">
              <Text size="2" style={{ minWidth: 60 }}>size={size}</Text>
              <Box style={{ flex: 1 }}>
                <Progress value={65} color="violet" size={size} />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Section>

      {/* Варианты */}
      <Section title="Progress — варианты (variant)">
        <Flex direction="column" gap="4">
          {(['classic', 'surface', 'soft'] as const).map((variant) => (
            <Flex key={variant} align="center" gap="3">
              <Text size="2" style={{ minWidth: 80 }}>"{variant}"</Text>
              <Box style={{ flex: 1 }}>
                <Progress value={65} color="violet" variant={variant} />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Section>

      {/* Анимированный (симуляция) */}
      <Section title="Progress — симуляция загрузки">
        <Flex direction="column" gap="5">
          <Box>
            <Flex justify="between" align="center" mb="2">
              <Text size="2" weight="medium">Загрузка файла</Text>
              <Text size="2" color="violet" weight="bold">{upload.value}%</Text>
            </Flex>
            <Progress
              value={upload.running || upload.value > 0 ? upload.value : undefined}
              color="violet"
              size="2"
            />
            <Flex justify="between" align="center" mt="2">
              <Text size="1" color="gray">
                {upload.value === 100 ? '✓ Завершено' : upload.running ? 'Загрузка...' : 'Ожидание'}
              </Text>
              <Button
                size="1"
                variant="soft"
                color="violet"
                onClick={upload.start}
                disabled={upload.running}
              >
                {upload.running ? 'Идёт загрузка...' : 'Запустить'}
              </Button>
            </Flex>
          </Box>

          <Box>
            <Flex justify="between" align="center" mb="2">
              <Text size="2" weight="medium">Установка пакетов</Text>
              <Text size="2" color="green" weight="bold">{install.value}%</Text>
            </Flex>
            <Progress
              value={install.running || install.value > 0 ? install.value : undefined}
              color="green"
              size="2"
            />
            <Flex justify="between" align="center" mt="2">
              <Text size="1" color="gray">
                {install.value === 100 ? '✓ Установлено' : install.running ? 'npm install...' : 'Ожидание'}
              </Text>
              <Button
                size="1"
                variant="soft"
                color="green"
                onClick={install.start}
                disabled={install.running}
              >
                {install.running ? 'Установка...' : 'npm install'}
              </Button>
            </Flex>
          </Box>
        </Flex>
      </Section>

      {/* Indeterminate (без значения) */}
      <Section title="Progress — неопределённый (indeterminate)">
        <Flex direction="column" gap="3" style={{ maxWidth: 400 }}>
          <Progress color="violet" />
          <Progress color="blue" size="2" />
          <Progress color="green" size="3" />
          <Text size="1" color="gray">
            Без prop value — анимация неопределённого прогресса
          </Text>
        </Flex>
      </Section>

      {/* Spinner */}
      <Section title="Spinner — индикатор загрузки">
        <Flex direction="column" gap="5">
          {/* Размеры */}
          <Box>
            <Text size="2" weight="medium" mb="3" style={{ display: 'block' }}>Размеры</Text>
            <Flex gap="5" align="center" wrap="wrap">
              {(['1', '2', '3'] as const).map((size) => (
                <Flex key={size} direction="column" align="center" gap="1">
                  <Spinner size={size} />
                  <Text size="1" color="gray">size={size}</Text>
                </Flex>
              ))}
            </Flex>
          </Box>

          {/* Spinner в кнопках */}
          <Box>
            <Text size="2" weight="medium" mb="3" style={{ display: 'block' }}>Spinner в кнопках</Text>
            <Flex gap="3" wrap="wrap">
              <Button color="violet" loading>Сохранение...</Button>
              <Button color="green" variant="soft" loading>Загрузка</Button>
              <Button color="blue" variant="outline" loading>Обработка</Button>
              <Button color="red" variant="ghost" loading>Удаление</Button>
            </Flex>
          </Box>

          {/* Spinner как оверлей */}
          <Box>
            <Text size="2" weight="medium" mb="3" style={{ display: 'block' }}>Spinner — оверлей контента</Text>
            <Grid columns={{ initial: '1', sm: '3' }} gap="3" style={{ maxWidth: 500 }}>
              {[true, true, false].map((loading, i) => (
                <Box
                  key={i}
                  p="4"
                  style={{
                    border: '1px solid var(--gray-4)',
                    borderRadius: 'var(--radius-3)',
                    position: 'relative',
                    minHeight: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {loading ? (
                    <Spinner size="3" />
                  ) : (
                    <Text size="2" color="gray">Данные загружены</Text>
                  )}
                </Box>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Section>
    </Box>
  );
};
