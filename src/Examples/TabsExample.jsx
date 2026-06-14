import { useState } from 'react';
import { Card, Tabs, Typography } from 'antd';
import { AppleFilled } from '@ant-design/icons';

export default function TabsExample() {

  const [activeKey, setActiveKey] = useState('1');

  const items = [
    {
      key: '1',
      label: 'Вкладка 1',
      children: 'Содержимое первой вкладки. Сюда кладут любой JSX.',
      icon: <AppleFilled />,
    },
    {
      key: '2',
      label: 'Вкладка 2',
      children: 'Вторая вкладка — например, другая таблица или форма.',
      icon: <AppleFilled />,
    },
    {
      key: '3',
      label: 'Отключена',
      disabled: true,
      children: 'Не откроется',
      icon: <AppleFilled />,
    },
  ];

  return (
    <section id="tabs">
      <Typography.Title level={3}>Tabs</Typography.Title>
      <Typography.Paragraph type="secondary">
        Неконтролируемый режим: не передаём <code>activeKey</code> — antd сам запоминает выбор. Ниже —{' '}
        <strong>контролируемый</strong> (<code>activeKey</code> + <code>onChange</code>).
      </Typography.Paragraph>

      <Card>
        <Tabs activeKey={activeKey} items={items} onChange={setActiveKey} tabPlacement='left' />
        <Typography.Paragraph type="secondary" style={{ marginTop: 12 }}>
          Текущий ключ: <code>{activeKey}</code>
        </Typography.Paragraph>
      </Card>
    </section>
  );
}
