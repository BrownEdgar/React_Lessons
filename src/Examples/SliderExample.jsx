import { useState } from 'react';
import { Card, Slider, Space, Typography } from 'antd';

/**
 * Slider: непрерывное или дискретное значение; `marks` — подписи под шкалой;
 * `range` — выбор диапазона двумя ползунками.
 */
export default function SliderExample() {
  const [value, setValue] = useState(30);
  const [range, setRange] = useState([20, 50]);

  return (
    <section id="slider-demo">
      <Typography.Title level={3}>Slider</Typography.Title>
      <Typography.Paragraph type="secondary">
        <code>onChange</code> вызывается при движении; <code>onAfterChange</code> — когда отпустили ползунок (удобно для
        запросов на сервер).
      </Typography.Paragraph>

      <Card>
        <Space orientation="vertical" size="large" className="ant-demo-stack-full">
          <div>
            <Typography.Text>Одно значение: {value}</Typography.Text>
            <Slider value={value} onChange={setValue} />
          </div>
          <div>
            <Typography.Text>
              Диапазон: {range[0]} — {range[1]}
            </Typography.Text>
            <Slider range value={range} max={100} onChange={setRange} />
          </div>
          <div>
            <Typography.Text>С метками (marks) и шагом 10</Typography.Text>
            <Slider marks={{ 0: '0', 50: '50', 100: '100' }} step={10} defaultValue={50} />
          </div>
        </Space>
      </Card>
    </section>
  );
}
