import { useState } from 'react';
import { Card, Rate, Space, Typography } from 'antd';

/**
 * Rate — звёздный рейтинг. `count` — число звёзд; `allowHalf` — половинки; tooltips — подписи при наведении.
 */
export default function RateExample() {
  const [value, setValue] = useState(3);

  return (
    <section id="rate-demo">
      <Typography.Title level={3}>Rate</Typography.Title>
      <Typography.Paragraph type="secondary">
        Значение можно держать в React-состоянии и синхронизировать с сервером по <code>onChange</code>.
      </Typography.Paragraph>

      <Card>
        <Space orientation="vertical" size="middle">
          <div>
            <Typography.Text>Базовый: </Typography.Text>
            <Rate onChange={setValue} value={value} />
            <Typography.Text type="secondary"> ({value} зв.)</Typography.Text>
          </div>
          <div>
            <Typography.Text>Половинки и 10 звёзд: </Typography.Text>
            <Rate allowHalf count={10} defaultValue={6.5} />
          </div>
          <div>
            <Typography.Text>С подсказками: </Typography.Text>
            <Rate tooltips={['Ужасно', 'Плохо', 'Нормально', 'Хорошо', 'Отлично']} />
          </div>
        </Space>
      </Card>
    </section>
  );
}
