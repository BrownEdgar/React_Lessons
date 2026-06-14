import { Card, Col, List, Row, Space, Typography } from 'antd';

import { ANT_DESIGN_INTRO } from './constants/antDesignDemo.constants';

/**
 * Вводный блок на главной: что такое antd, ссылки, плюсы, ориентир по популярности (npm).
 */
export default function AntDesignIntro() {
  const {
    title,
    definition,
    npmPackageUrl,
    githubUrl,
    docsUrl,
    weeklyDownloadsHint,
    strengthsTitle,
    strengths,
    introFooter,
  } = ANT_DESIGN_INTRO;

  return (
    <section id="about-antd" className="ant-demo-intro-section">
      <Typography.Title level={2}>{title}</Typography.Title>
      <Typography.Paragraph>{definition}</Typography.Paragraph>

      <Row gutter={[16, 16]} className="ant-demo-intro-stats-row">
        <Col xs={24} sm={8}>
          <Card className="ant-demo-intro-card" size="small" title="Популярность (npm)">
            <Typography.Paragraph className="ant-demo-intro-stat-value">{weeklyDownloadsHint}</Typography.Paragraph>
            <Typography.Link href={npmPackageUrl} target="_blank" rel="noreferrer">
              Открыть antd на npm
            </Typography.Link>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="ant-demo-intro-card" size="small" title="Исходный код">
            <Typography.Paragraph className="ant-demo-intro-stat-value">Репозиторий на GitHub</Typography.Paragraph>
            <Typography.Link href={githubUrl} target="_blank" rel="noreferrer">
              ant-design/ant-design
            </Typography.Link>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="ant-demo-intro-card" size="small" title="Документация">
            <Typography.Paragraph className="ant-demo-intro-stat-value">Официальный сайт</Typography.Paragraph>
            <Typography.Link href={docsUrl} target="_blank" rel="noreferrer">
              Components overview
            </Typography.Link>
          </Card>
        </Col>
      </Row>

      <Typography.Title level={4} className="ant-demo-intro-subtitle">
        {strengthsTitle}
      </Typography.Title>
      <List
        size="small"
        bordered
        dataSource={strengths}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />

      <Space orientation="vertical" size="middle" className="ant-demo-intro-footer">
        <Typography.Paragraph type="secondary">{introFooter}</Typography.Paragraph>
      </Space>
    </section>
  );
}
