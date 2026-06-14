import { useEffect, useRef, useState } from 'react';
import { Button, Card, Divider, Space, Switch, Tooltip, Typography } from 'antd';

const { Link } = Typography;


export default function TooltipSwitchExample() {
  const [darkMode, setDarkMode] = useState(true);
  const [asyncValue, setAsyncValue] = useState(false);
  const [asyncSaving, setAsyncSaving] = useState(false);
  const asyncTimerRef = useRef(0);

  const handleAsyncSwitch = (checked) => {
    window.clearTimeout(asyncTimerRef.current);
    setAsyncSaving(true);
    asyncTimerRef.current = window.setTimeout(() => {
      setAsyncValue(checked);
      setAsyncSaving(false);
    }, 2800);
  };

  useEffect(() => {
    return () => window.clearTimeout(asyncTimerRef.current);
  }, []);

  return (
    <section id="tooltip-switch">
      <Typography.Title level={3}>Tooltip и Switch</Typography.Title>

      <Typography.Title level={5}>Tooltip</Typography.Title>
      <Typography.Paragraph type="secondary">
        Проп <code>title</code> — текст подсказки; <code>placement</code> — сторона появления. Для кнопок с
        отключённым состоянием оборачивайте кнопку в <Typography.Text code>span</Typography.Text>, иначе события
        наведения не дойдут до disabled-элемента.
      </Typography.Paragraph>

      <Space wrap size="middle">
        <Tooltip title="tooltip example text" placement="bottom">
          <Button>Наведи на меня</Button>
        </Tooltip>
        <Tooltip placement="right" title="Справа (placement)">
          <Link href="#tooltip-switch">Ссылка с подсказкой</Link>
        </Tooltip>
        <Tooltip color="#722ed1" title="Кастомный фон (color)">
          <Button type="primary">Фиолетовый tooltip</Button>
        </Tooltip>
        <Tooltip title="Кнопка disabled — обёртка span">
          <span>
            <Button disabled>Disabled + tooltip</Button>
          </span>
        </Tooltip>
      </Space>


      <Divider />

      <Typography.Title level={5}>Switch</Typography.Title>
      <Typography.Paragraph type="secondary">
        <code>checked</code> — включён ли переключатель; <code>onChange</code> — (checked, event). Есть варианты{' '}
        <code>loading</code>, <code>disabled</code>, подписи <code>checkedChildren</code> /{' '}
        <code>uncheckedChildren</code>.
      </Typography.Paragraph>
      <Card>
        <Space orientation="vertical" size="middle" className="ant-demo-stack-full">
          <Space wrap align="center">
            <Typography.Text>Контролируемый (состояние в React):</Typography.Text>
            <Switch
              checked={darkMode}
              onChange={setDarkMode}
              checkedChildren="on"
              unCheckedChildren="off"
            />
            <Typography.Text type="secondary">сейчас: {darkMode ? 'вкл' : 'выкл'}</Typography.Text>
          </Space>
          <Space wrap align="start">
            <Typography.Text>Состояние «сохраняется» (имитация async):</Typography.Text>
            <Switch
              checkedChildren="Вкл"
              unCheckedChildren="Выкл"
              onChange={handleAsyncSwitch}
              checked={asyncValue}
              loading={asyncSaving}
            />
          </Space>
          <Space wrap>
            <Switch defaultChecked disabled />
            <Typography.Text type="secondary">defaultChecked + disabled</Typography.Text>
          </Space>
          <Space wrap>
            <Switch size="small" defaultChecked />
            <Typography.Text type="secondary">size=&quot;small&quot;</Typography.Text>
          </Space>
        </Space>
      </Card>
    </section>
  );
}
