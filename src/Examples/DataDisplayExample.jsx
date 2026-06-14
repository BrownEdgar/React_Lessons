import { BellOutlined, UserOutlined } from '@ant-design/icons';
import {
  Avatar,
  Badge,
  Button,
  Card,
  Col,
  List,
  Popover,
  Row,
  Space,
  Statistic,
  Tooltip,
  Typography,
} from 'antd';

/**
 * Комбинированный блок «отображение данных»: часто аватар + бейдж + список + всплывающие подсказки/поповеры.
 *
 * Про List: в некоторых версиях/доках компонент могут помечать как устаревающий в пользу кастомных списков,
 * но `dataSource` + `renderItem` по-прежнему полезны для обучения и простых экранов.
 */
const listData = [
  { title: 'Ant Design Title 1', desc: 'Описание строки списка' },
  { title: 'Ant Design Title 2', desc: 'Можно вложить кнопки, теги, вторичный текст' },
  { title: 'Ant Design Title 3', desc: 'Источник данных — обычный массив из API' },
];

export default function DataDisplayExample() {
  const popoverContent = (
    <div>
      <Typography.Text>Содержимое Popover — любой JSX.</Typography.Text>
    </div>
  );

  // Дедлайн для обратного отсчёта: через сутки (timestamp в мс)
  const deadlineMs = Date.now() + 1000 * 60 * 60 * 24;

  return (
    <section id="data-display">
      <Typography.Title level={3}>Avatar, Badge, List, Popover, Statistic</Typography.Title>
      <Typography.Paragraph type="secondary">
        Ниже — типичные связки: бейдж на иконке уведомлений, группа аватаров, список с метаданными, поповер на кнопке,
        статистика и таймер.
      </Typography.Paragraph>

      <Space orientation="vertical" size="large" className="ant-demo-stack-full">
        <Card title="Avatar + Badge">
          <Space size="large" wrap>
            {/* size: визуальный размер; src / icon — картинка или иконка */}
            <Avatar size={164} src='https://images.unsplash.com/photo-1779406859387-5d6fd116b3ff?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            <Avatar.Group>
              <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
              <Avatar style={{ backgroundColor: '#87d068' }}>L</Avatar>
              <Avatar style={{ backgroundColor: '#1890ff' }}>N</Avatar>
              <Avatar style={{ backgroundColor: '#1890ff' }}>N</Avatar>
              <Avatar style={{ backgroundColor: '#1890ff' }}>N</Avatar>
              <Avatar style={{ backgroundColor: '#1890ff' }}>N</Avatar>
              <Avatar style={{ backgroundColor: '#1890ff' }}>N</Avatar>
            </Avatar.Group>
            <Badge count={500} overflowCount={100} dot>
              <Avatar shape="square" icon={<UserOutlined />} />
            </Badge>
            <Badge count={10} status='processing' dot color='green'>
              <BellOutlined style={{ fontSize: 22 }} />
            </Badge>
          </Space>
        </Card>

        <Card title="List + List.Item.Meta">
          <List
            bordered
            dataSource={listData}
            itemLayout="horizontal"
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=antd" />}
                  title={<a href="#data-display">{item.title}</a>}
                  description={item.desc}
                />
              </List.Item>
            )}
          />
        </Card>

        <Card title="Popover и Tooltip">
          <Space>
            <Popover content={popoverContent} title="Заголовок">
              <Button type="primary">Наведи / кликни</Button>
            </Popover>
            <Tooltip title="Краткая подсказка без клика (по hover)">
              <Typography.Link>Текст с Tooltip</Typography.Link>
            </Tooltip>
          </Space>
        </Card>

        <Card title="Statistic и обратный отсчёт">
          <Row gutter={16}>
            <Col span={8}>
              <Statistic title="Активные пользователи" value={112893} />
            </Col>
            <Col span={8}>
              <Statistic title="Баланс" value={93.5} precision={2} suffix="%" prefix="+" />
            </Col>
            <Col span={8}>
              {/* В antd 6 предпочтительнее Timer; Countdown оставлен как обёртка для совместимости */}
              <Statistic.Timer type="countdown" title="До дедлайна" value={deadlineMs} format="HH:mm:ss" />
            </Col>
          </Row>
        </Card>
      </Space>
    </section>
  );
}
