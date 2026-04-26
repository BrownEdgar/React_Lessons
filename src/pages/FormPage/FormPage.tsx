// Страница Form — полноценная форма с React Hook Form + Yup валидацией
// Демонстрирует все Radix поля: TextField, Select, RadioGroup, Checkbox, Switch
// Docs: https://www.radix-ui.com/themes/docs/components/text-field
// Docs: https://www.radix-ui.com/themes/docs/components/select
// Docs: https://www.radix-ui.com/themes/docs/components/checkbox
// Docs: https://www.radix-ui.com/themes/docs/components/radio-group
// Docs: https://www.radix-ui.com/themes/docs/components/switch

import {
  Box,
  Button,
  Callout,
  Checkbox,
  Flex,
  Heading,
  RadioGroup,
  Select,
  Separator,
  Switch,
  Text,
  TextField,
} from '@radix-ui/themes';
import { CheckCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

// Схема валидации Yup
const schema = yup.object({
  name: yup.string().min(2, 'Минимум 2 символа').required('Имя обязательно'),
  email: yup.string().email('Некорректный email').required('Email обязателен'),
  password: yup.string().min(6, 'Минимум 6 символов').required('Пароль обязателен'),
  role: yup.string().oneOf(['admin', 'editor', 'viewer'], 'Выберите роль').required('Роль обязательна'),
  department: yup.string().required('Выберите отдел'),
  notifications: yup.boolean().default(true),
  terms: yup.boolean().oneOf([true], 'Необходимо принять условия').required(),
});

type FormData = yup.InferType<typeof schema>;

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <Text as="label" size="2" weight="medium" mb="1" style={{ display: 'block' }}>
    {children}
  </Text>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <Text size="1" color="red" mt="1" style={{ display: 'block' }}>
      {message}
    </Text>
  ) : null;

export const FormPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: { notifications: true, terms: false },
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log('Form data:', data);
    setSubmitted(true);
  };

  return (
    <Box p="6" style={{ maxWidth: 560 }}>
      <Heading size="8" mb="2">
        Forms
      </Heading>
      <Text size="3" color="gray" mb="6" as="p">
        React Hook Form + Yup + все Radix UI поля ввода
      </Text>

      {submitted && (
        <Callout.Root color="green" mb="5">
          <Callout.Icon>
            <CheckCircledIcon />
          </Callout.Icon>
          <Callout.Text>Форма успешно отправлена! Данные в консоли.</Callout.Text>
        </Callout.Root>
      )}

      <Callout.Root color="blue" mb="5" variant="soft">
        <Callout.Icon>
          <InfoCircledIcon />
        </Callout.Icon>
        <Callout.Text size="2">
          Отправьте пустую форму чтобы увидеть ошибки валидации
        </Callout.Text>
      </Callout.Root>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Flex direction="column" gap="4">

          {/* TextField — имя */}
          <Box>
            <FieldLabel>Полное имя *</FieldLabel>
            <TextField.Root
              placeholder="Иван Иванов"
              {...register('name')}
              color={errors.name ? 'red' : undefined}
            />
            <FieldError message={errors.name?.message} />
          </Box>

          {/* TextField — email */}
          <Box>
            <FieldLabel>Email *</FieldLabel>
            <TextField.Root
              type="email"
              placeholder="ivan@example.com"
              {...register('email')}
              color={errors.email ? 'red' : undefined}
            />
            <FieldError message={errors.email?.message} />
          </Box>

          {/* TextField — пароль */}
          <Box>
            <FieldLabel>Пароль *</FieldLabel>
            <TextField.Root
              type="password"
              placeholder="Минимум 6 символов"
              {...register('password')}
              color={errors.password ? 'red' : undefined}
            />
            <FieldError message={errors.password?.message} />
          </Box>

          <Separator size="4" />

          {/* Select — отдел */}
          <Box>
            <FieldLabel>Отдел *</FieldLabel>
            <Controller
              name="department"
              control={control}
              render={({ field }) => (
                <Select.Root
                  value={field.value ?? ''}
                  onValueChange={field.onChange}
                >
                  <Select.Trigger placeholder="Выберите отдел" style={{ width: '100%' }} />
                  <Select.Content>
                    <Select.Group>
                      <Select.Label>Отделы</Select.Label>
                      <Select.Item value="engineering">Инженерия</Select.Item>
                      <Select.Item value="design">Дизайн</Select.Item>
                      <Select.Item value="analytics">Аналитика</Select.Item>
                      <Select.Item value="marketing">Маркетинг</Select.Item>
                    </Select.Group>
                  </Select.Content>
                </Select.Root>
              )}
            />
            <FieldError message={errors.department?.message} />
          </Box>

          {/* RadioGroup — роль */}
          <Box>
            <FieldLabel>Роль *</FieldLabel>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <RadioGroup.Root
                  value={field.value ?? ''}
                  onValueChange={field.onChange}
                  color={errors.role ? 'red' : 'violet'}
                >
                  <Flex direction="column" gap="2">
                    <Flex align="center" gap="2">
                      <RadioGroup.Item value="admin" id="role-admin" />
                      <Text as="label" htmlFor="role-admin" size="2">Администратор</Text>
                    </Flex>
                    <Flex align="center" gap="2">
                      <RadioGroup.Item value="editor" id="role-editor" />
                      <Text as="label" htmlFor="role-editor" size="2">Редактор</Text>
                    </Flex>
                    <Flex align="center" gap="2">
                      <RadioGroup.Item value="viewer" id="role-viewer" />
                      <Text as="label" htmlFor="role-viewer" size="2">Читатель</Text>
                    </Flex>
                  </Flex>
                </RadioGroup.Root>
              )}
            />
            <FieldError message={errors.role?.message} />
          </Box>

          <Separator size="4" />

          {/* Switch — уведомления */}
          <Flex align="center" justify="between">
            <Box>
              <Text size="2" weight="medium">Email-уведомления</Text>
              <Text size="1" color="gray">Получать новости и обновления</Text>
            </Box>
            <Controller
              name="notifications"
              control={control}
              render={({ field }) => (
                <Switch
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                  color="violet"
                />
              )}
            />
          </Flex>

          {/* Checkbox — условия */}
          <Flex align="start" gap="2">
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  checked={field.value ?? false}
                  onCheckedChange={field.onChange}
                  color={errors.terms ? 'red' : 'violet'}
                />
              )}
            />
            <Box>
              <Text as="label" htmlFor="terms" size="2">
                Я принимаю{' '}
                <Text color="violet" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
                  условия использования
                </Text>
              </Text>
              <FieldError message={errors.terms?.message} />
            </Box>
          </Flex>

          <Button type="submit" size="3" loading={isSubmitting} color="violet">
            {isSubmitting ? 'Отправка...' : 'Отправить форму'}
          </Button>
        </Flex>
      </form>
    </Box>
  );
};
