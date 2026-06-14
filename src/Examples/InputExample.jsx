import { AudioOutlined } from '@ant-design/icons';
import { Card, Input, Space, Typography, message } from 'antd';

const { TextArea } = Input;

/**
 * Input — обёртка над нативным input с префиксами/суффиксами, очисткой и вариантами (пароль, поиск).
 */
export default function InputExample() {
  return (
    <section id="inputs">
      <Typography.Title level={3}>Input</Typography.Title>
      <Typography.Paragraph type="secondary">
        <code>allowClear</code> — крестик очистки; <code>prefix</code>/<code>suffix</code> — иконки или текст слева/справа.
      </Typography.Paragraph>

      <Card>
        <Space orientation="vertical" size="middle" className="ant-demo-stack-full">
          <Input placeholder="Обычный input" allowClear />
          <Input.Password placeholder="Пароль" />
          <TextArea placeholder="Несколько строк (TextArea)" rows={3} showCount maxLength={200} />
          <Input.Search
            placeholder="Поиск"
            allowClear
            enterButton="Найти"
            onSearch={(value) => {
              message.info(value ? `Ищем: ${value}` : 'Пустой запрос');
            }}
          />
          <Input prefix={<AudioOutlined />} placeholder="С префиксом-иконкой" />
        </Space>
      </Card>
    </section>
  );
}
