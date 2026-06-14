import { UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input, Typography, message } from 'antd';


const loginFieldRules = [
  { required: true, message: 'Введите имя пользователя' },
  { min: 3, message: 'Минимум 3 символа' },
  { max: 10, message: 'Максимум 10 символов' },
]

export default function FormExample() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    // values — объект вида { username: '...', password: '...' } после успешной валидации
    message.success(`Отправлено (демо): ${JSON.stringify(values)}`);
  };

  return (
    <section id="form-demo">
      <Typography.Title level={3}>Form</Typography.Title>
      <Typography.Paragraph type="secondary">
        Это нативная форма antd, не Formik/React Hook Form. Связь поля с формой — через <code>name</code> в{' '}
        <code>Form.Item</code>.
      </Typography.Paragraph>

      <Card style={{ maxWidth: 420 }}>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Имя пользователя"
            name="username"
            rules={loginFieldRules}
          >
            <Input placeholder="login" allowClear prefix={<UserOutlined />} onPressEnter={() => alert('Enter pressed')} variant='underlined' />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Введите пароль' }]}
          >
            <Input.Password placeholder="••••••••" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
            <Button htmlType="button" style={{ marginLeft: 8 }} onClick={() => form.resetFields()}>
              Сброс
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </section>
  );
}
