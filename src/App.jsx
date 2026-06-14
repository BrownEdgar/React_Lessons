import { ConfigProvider, Flex, Layout, Typography, Anchor } from 'antd';
import ruRU from 'antd/locale/ru_RU';

import AntDesignIntro from './AntDesignIntro';
import './App.css';
import ButtonExample from './Examples/ButtonExample';
import CardExample from './Examples/CardExample';
import CollapseExample from './Examples/CollapseExample';
import DataDisplayExample from './Examples/DataDisplayExample';
import FormExample from './Examples/FormExample';
import InputExample from './Examples/InputExample';
import LayoutExample from './Examples/LayoutExample';
import MoreComponentsExample from './Examples/MoreComponentsExample';
import RateExample from './Examples/RateExample';
import SliderExample from './Examples/SliderExample';
import TabsExample from './Examples/TabsExample';
import TooltipSwitchExample from './Examples/TooltipSwitchExample';
import {
  ANCHOR_ITEMS,
  APP_THEME,
  ANT_DESIGN_INTRO,
  PAGE_HEADER_TITLE,
} from './constants/antDesignDemo.constants';

const { Header, Content } = Layout;

/**
 * Корень демо: тёмная тема + русская локаль.
 * Константы якорей и темы — в `./constants/antDesignDemo.constants.js`, стили шапки/контента — в `App.css`.
 */
export default function App() {
  return (
    <ConfigProvider locale={ruRU} theme={APP_THEME}>
      <Layout className="ant-demo-root">
        <Header className="ant-demo-header">
          <Typography.Title level={3} className="ant-demo-header-title">
            {PAGE_HEADER_TITLE}
          </Typography.Title>
          <Anchor affix={false} direction="horizontal" items={ANCHOR_ITEMS} />
        </Header>
        <Content className="ant-demo-content">
          <Typography.Paragraph className="ant-demo-lead">
            {ANT_DESIGN_INTRO.leadParagraph}
          </Typography.Paragraph>

          <Flex vertical gap={48}>
            <AntDesignIntro />
            <CardExample />
            <CollapseExample />
            <ButtonExample />
            <TabsExample />
            <LayoutExample />
            <FormExample />
            <InputExample />
            <TooltipSwitchExample />
            <SliderExample />
            <RateExample />
            <DataDisplayExample />
            <MoreComponentsExample />
          </Flex>
        </Content>
      </Layout>
    </ConfigProvider>
  );
}
