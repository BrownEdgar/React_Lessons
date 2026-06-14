import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Space, Typography } from 'antd';

const { Meta } = Card;

/**
 * Card — контейнер с тенью/рамкой для группировки контента: заголовок, действия, обложка, сетка карточек.
 */
export default function CardExample() {
  return (
    <section id="cards">
      <Typography.Title level={3}>Card</Typography.Title>
      <Typography.Paragraph type="secondary">
        Проп <code>title</code> — заголовок; <code>extra</code> — слот справа; <code>actions</code> — нижняя полоса
        иконок. <code>Meta</code> — типичный блок «аватар + заголовок + описание».
      </Typography.Paragraph>

      <Space orientation="vertical" size="large" className="ant-demo-stack-full">
        <Card title="Простая карточка" extra={<a href="#cards">ещё</a>} className="ant-demo-card-narrow">
          Любое содержимое: текст, форма, график. Карточка задаёт отступы и визуальную границу секции.
        </Card>

        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Card
              hoverable
              cover={
                <img alt="пример обложки" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxcluU.png" className="ant-demo-card-cover" />
              }
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card
              actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]}
            >
              <Meta
                avatar={<Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=card" />}
                title="Карточка с действиями"
                description="Три иконки внизу — типичный паттерн карточки товара или поста"
              />
            </Card>
          </Col>
        </Row>
      </Space>
    </section>
  );
}
