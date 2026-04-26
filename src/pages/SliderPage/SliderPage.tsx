// Страница Slider — диапазонный инпут, одиночный и диапазонный
// Docs: https://www.radix-ui.com/themes/docs/components/slider

import {
  Box,
  Flex,
  Grid,
  Heading,
  Separator,
  Slider,
  Text,
} from '@radix-ui/themes';
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

const ValueDisplay = ({ value }: { value: number | number[] }) => (
  <Text size="2" color="violet" weight="bold" style={{ minWidth: 40, textAlign: 'right' }}>
    {Array.isArray(value) ? `${value[0]}–${value[1]}` : value}
  </Text>
);

export const SliderPage = () => {
  const [volume, setVolume] = useState(60);
  const [brightness, setBrightness] = useState(75);
  const [priceRange, setPriceRange] = useState([2000, 30000]);
  const [rating, setRating] = useState(4);

  return (
    <Box p="6" style={{ maxWidth: 700 }}>
      <Heading size="8" mb="2">
        Slider
      </Heading>
      <Text size="3" color="gray" mb="6" as="p">
        Диапазонный инпут — одиночный, двойной, вертикальный, disabled
      </Text>

      {/* Базовые слайдеры */}
      <Section title="Базовые Slider">
        <Flex direction="column" gap="5">
          <Box>
            <Flex justify="between" mb="2">
              <Text size="2" weight="medium">Неуправляемый (defaultValue=40)</Text>
            </Flex>
            <Slider defaultValue={[40]} color="violet" />
          </Box>

          <Box>
            <Flex justify="between" align="center" mb="2">
              <Text size="2" weight="medium">Громкость</Text>
              <ValueDisplay value={volume} />
            </Flex>
            <Slider
              value={[volume]}
              onValueChange={([v]) => setVolume(v)}
              color="violet"
              min={0}
              max={100}
            />
          </Box>

          <Box>
            <Flex justify="between" align="center" mb="2">
              <Text size="2" weight="medium">Яркость</Text>
              <ValueDisplay value={brightness} />
            </Flex>
            <Slider
              value={[brightness]}
              onValueChange={([v]) => setBrightness(v)}
              color="orange"
              min={10}
              max={100}
            />
          </Box>

          <Box>
            <Flex justify="between" align="center" mb="2">
              <Text size="2" weight="medium">Рейтинг (шаг 1, 1–5)</Text>
              <ValueDisplay value={rating} />
            </Flex>
            <Slider
              value={[rating]}
              onValueChange={([v]) => setRating(v)}
              color="yellow"
              min={1}
              max={5}
              step={1}
            />
          </Box>
        </Flex>
      </Section>

      {/* Диапазон (range) */}
      <Section title="Slider — диапазон (два значения)">
        <Box>
          <Flex justify="between" align="center" mb="2">
            <Text size="2" weight="medium">Ценовой диапазон</Text>
            <Text size="2" color="violet" weight="bold">
              {priceRange[0].toLocaleString('ru-RU')} ₽ — {priceRange[1].toLocaleString('ru-RU')} ₽
            </Text>
          </Flex>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            color="violet"
            min={0}
            max={100000}
            step={500}
          />
          <Flex justify="between" mt="1">
            <Text size="1" color="gray">0 ₽</Text>
            <Text size="1" color="gray">100 000 ₽</Text>
          </Flex>
        </Box>
      </Section>

      {/* Цвета */}
      <Section title="Slider — цвета">
        <Flex direction="column" gap="4">
          {(
            [
              { color: 'violet', label: 'violet' },
              { color: 'blue', label: 'blue' },
              { color: 'green', label: 'green' },
              { color: 'red', label: 'red' },
              { color: 'orange', label: 'orange' },
              { color: 'gray', label: 'gray' },
            ] as const
          ).map(({ color, label }) => (
            <Flex key={color} align="center" gap="3">
              <Text size="2" style={{ minWidth: 60 }}>{label}</Text>
              <Box style={{ flex: 1 }}>
                <Slider defaultValue={[55 + Math.random() * 30 | 0]} color={color} />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Section>

      {/* Размеры */}
      <Section title="Slider — размеры (size)">
        <Flex direction="column" gap="4">
          {(['1', '2', '3'] as const).map((size) => (
            <Flex key={size} align="center" gap="3">
              <Text size="2" style={{ minWidth: 60 }}>size={size}</Text>
              <Box style={{ flex: 1 }}>
                <Slider defaultValue={[60]} color="violet" size={size} />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Section>

      {/* Варианты */}
      <Section title="Slider — варианты (variant)">
        <Flex direction="column" gap="4">
          {(['surface', 'classic', 'soft'] as const).map((variant) => (
            <Flex key={variant} align="center" gap="3">
              <Text size="2" style={{ minWidth: 80 }}>variant="{variant}"</Text>
              <Box style={{ flex: 1 }}>
                <Slider defaultValue={[65]} color="violet" variant={variant} />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Section>

      {/* Disabled */}
      <Section title="Slider — disabled">
        <Box style={{ maxWidth: 400 }}>
          <Slider defaultValue={[45]} color="gray" disabled />
          <Text size="1" color="gray" mt="2" style={{ display: 'block' }}>
            Слайдер задизейблен — значение нельзя изменить
          </Text>
        </Box>
      </Section>

      {/* Практический пример */}
      <Section title="Реальный пример — настройки изображения">
        <Grid columns="1" gap="4" style={{ maxWidth: 500 }}>
          {[
            { label: 'Яркость', color: 'yellow', default: 60, unit: '%' },
            { label: 'Контраст', color: 'gray', default: 50, unit: '%' },
            { label: 'Насыщенность', color: 'red', default: 70, unit: '%' },
            { label: 'Резкость', color: 'blue', default: 40, unit: '%' },
          ].map(({ label, color, default: def, unit }) => {
            const [val, setVal] = useState(def);
            return (
              <Flex key={label} align="center" gap="3">
                <Text size="2" style={{ minWidth: 110 }}>{label}</Text>
                <Box style={{ flex: 1 }}>
                  <Slider
                    value={[val]}
                    onValueChange={([v]) => setVal(v)}
                    color={color as 'yellow' | 'gray' | 'red' | 'blue'}
                    size="2"
                  />
                </Box>
                <Text size="2" color="gray" style={{ minWidth: 35, textAlign: 'right' }}>
                  {val}{unit}
                </Text>
              </Flex>
            );
          })}
        </Grid>
      </Section>
    </Box>
  );
};
