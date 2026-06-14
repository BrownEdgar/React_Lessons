import { Layout, Menu, Typography } from 'antd';

import './LayoutExample.css';

const { Header, Sider, Content, Footer } = Layout;
/**
 * Классическая «админка»: Sider + верхний Header + контент + Footer.
 * Вложенный `Layout` здесь только для демо (узкая высота), в реальном приложении часто на весь экран.
 * Оформление превью — в `LayoutExample.css` (без инлайнов: проще править и совпадает с подходом в `App.css`).
 */
export default function LayoutExample() {
  return (
    <section id="layout-demo">
      <Typography.Title level={3}>Layout</Typography.Title>
      <Typography.Paragraph type="secondary">
        Составные части: <code>Layout</code>, <code>Sider</code>, <code>Header</code>, <code>Content</code>,{' '}
        <code>Footer</code>. Меню в сайдбаре — обычный компонент <code>Menu</code> (здесь заглушка).
      </Typography.Paragraph>

      <Layout className="ant-demo-layout-shell">
        <Sider breakpoint="lg" collapsedWidth={0} theme="dark" width={160}>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
              { key: '1', label: 'Раздел 1' },
              { key: '2', label: 'Раздел 2' },
            ]}
          />
        </Sider>
        <Layout>
          <Header className="ant-demo-layout-header">Header</Header>
          <Content className="ant-demo-layout-content">Content</Content>
          <Footer className="ant-demo-layout-footer">Footer</Footer>
        </Layout>
      </Layout>
    </section>
  );
}
