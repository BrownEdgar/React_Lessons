import { Divider, Empty, Flex, Progress, Space, Tag, Typography } from 'antd';

import './MoreComponentsExample.css';

/**
 * Дополнительные частые компоненты: теги, пустое состояние, прогресс, визуальное разделение.
 * В antd 6 у `Space` проп `direction` помечен deprecated — для вертикальной колонки используем `Flex vertical` или `Space orientation="vertical"`.
 */
export default function MoreComponentsExample() {
  return (
    <section id="more-components">
      <Typography.Title level={3}>Tag, Empty, Progress, Divider</Typography.Title>
      <Typography.Paragraph type="secondary">
        Их удобно комбинировать: например, над прогрессом — тег статуса, ниже — разделитель перед следующим блоком.
      </Typography.Paragraph>

      <Flex vertical gap="large" className="ant-demo-more-root">
        <div>
          <Typography.Text strong>Tag: </Typography.Text>
          {/* color — предустановленные цвета antd; onClose — для closable */}
          <Space wrap>
            <Tag>без цвета</Tag>
            <Tag color="success">success</Tag>
            <Tag color="processing">processing</Tag>
            <Tag color="error">error</Tag>
            <Tag closable onClose={() => { }}>
              закрываемый
            </Tag>
          </Space>
        </div>

        <Divider orientation="left">Divider</Divider>
        <Typography.Paragraph type="secondary">
          <code>Divider</code> визуально разделяет секции; <code>orientation</code> — подпись слева/по центру.
        </Typography.Paragraph>

        <div>
          <Typography.Text strong>Empty — пустой список / нет данных</Typography.Text>
          <Empty description="Нет элементов для отображения" />
        </div>

        <div>
          <Typography.Text strong>Progress</Typography.Text>
          <Flex vertical gap="small" className="ant-demo-more-progress-stack">
            <Progress percent={90} />
            <Progress percent={50} status="active" />
            <Progress percent={100} />
            <Progress percent={70} status="exception" />
          </Flex>
        </div>
      </Flex>
    </section>
  );
}
