import { Tabs, Typography } from 'antd';

const App = () => {
  const items = [
    {
      key: '1',
      label: 'Item 1',
      children: <Typography.Paragraph>lorem11</Typography.Paragraph>,
    },
    {
      key: '2',
      label: 'Item 2',
      children: <Typography.Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</Typography.Paragraph>,
    },
    {
      key: '3',
      label: 'Item 3',
      disabled: true,
      children: <Typography.Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </Typography.Paragraph>,
    },
  ]

  return (
    <div className="App">
      <Typography.Title level={1}>Tabs Example</Typography.Title>
      <Tabs items={items} tabPlacement='left' />
    </div>
  )
};


export default App;