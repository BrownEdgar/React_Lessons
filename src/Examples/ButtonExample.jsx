import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Space, Typography } from 'antd';

export default function ButtonExample() {
  return (
    <section id="buttons">
      <Typography.Title level={3}>Button</Typography.Title>
      <Typography.Paragraph type="secondary">
        {/* type: primary — главное действие; default — вторичное; dashed — «обводка пунктиром»; link/text — как ссылка */}
        Основные варианты: <code>type</code> (<code>primary</code>, <code>default</code>, <code>dashed</code>,{' '}
        <code>link</code>), размер <code>size</code>, состояние <code>loading</code> и <code>disabled</code>.
      </Typography.Paragraph>

      <Card>
        <Space wrap>
          <Button type="primary" size="large" icon={<UserOutlined />} iconPlacement="end">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed" size="small">Dashed</Button>
          <Button type="link">Link</Button>
          <Button type="text">Text</Button>
          <Button type="primary" danger>
            Danger
          </Button>
          <Button type="primary" icon={<SearchOutlined />} loading>
            Загрузка
          </Button>
          <Button disabled>Disabled</Button>
        </Space>
        <Typography.Paragraph style={{ marginTop: 16 }} type="secondary">
          Проп <code>icon</code> принимает React-элемент иконки; <code>loading</code> блокирует клик и показывает
          спиннер.
        </Typography.Paragraph>
      </Card>
    </section>
  );
}
