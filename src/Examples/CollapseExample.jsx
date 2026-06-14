import { Collapse, Typography } from 'antd';


const COLLAPSE_PANEL_ITEMS = [
  {
    key: '1',
    label: 'Панель 1 — часто задаваемые вопросы',
    children: <p>Содержимое первой панели. Можно вкладывать списки, формы, другие компоненты antd.</p>,
  },
  {
    key: '2',
    label: 'Панель 2',
    children: <p>Вторая секция аккордеона независима от первой.</p>,
  },
  {
    key: '3',
    label: 'Панель 3 (изначально открыта ниже)',
    children: <p>Комбинация с Card внутри панели — обычный приём для «развёрнутого» контента.</p>,
  },
  {
    key: '4',
    label: 'Панель 4',
    children: <div>
      <Typography.Title level={5}>Четвертая секция аккордеона.</Typography.Title>
      <Typography.Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi earum quaerat illum. Dolorum cumque fugit praesentium culpa reiciendis sint facilis?</Typography.Paragraph>
    </div>,
  },
];

/** Для режима accordion достаточно двух панелей — отдельная ссылка на срез, без slice в JSX */
const COLLAPSE_ACCORDION_ITEMS = COLLAPSE_PANEL_ITEMS.slice(0, 2);

/**
 * Collapse — аккордеон: несколько панелей, каждая с заголовком и скрываемым содержимым.
 * В antd 5+ панели задают массивом `items` (key, label, children).
 */
export default function CollapseExample() {
  return (
    <section id="collapse">
      <Typography.Title level={3}>Collapse</Typography.Title>
      <Typography.Paragraph type="secondary">
        <code>defaultActiveKey</code> — какие секции открыты при первом рендере; для полного контроля используйте{' '}
        <code>activeKey</code> + <code>onChange</code> (контролируемый режим).
      </Typography.Paragraph>

      <Collapse accordion items={COLLAPSE_PANEL_ITEMS} bordered={false} expandIconPlacement='end' ghost />

      <Typography.Paragraph type="secondary" className="ant-demo-collapse-spacing">
        Вариант <code>accordion</code>: одновременно открыта только одна панель.
      </Typography.Paragraph>
      <Collapse accordion items={COLLAPSE_ACCORDION_ITEMS} />
    </section>
  );
}
