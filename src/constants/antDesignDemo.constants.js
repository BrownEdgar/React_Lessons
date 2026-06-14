import { theme } from 'antd';

/**
 * Тема приложения: тёмный алгоритм токенов antd (см. ConfigProvider в документации).
 */
export const APP_THEME = {
  algorithm: theme.darkAlgorithm,
};

/**
 * Якоря навигации — href совпадает с id секций на странице.
 */
export const ANCHOR_ITEMS = [
  { key: 'about', href: '#about-antd', title: 'О Ant Design' },
  { key: 'cards', href: '#cards', title: 'Card' },
  { key: 'collapse', href: '#collapse', title: 'Collapse' },
  { key: 'buttons', href: '#buttons', title: 'Button' },
  { key: 'tabs', href: '#tabs', title: 'Tabs' },
  { key: 'layout', href: '#layout-demo', title: 'Layout' },
  { key: 'form', href: '#form-demo', title: 'Form' },
  { key: 'inputs', href: '#inputs', title: 'Input' },
  { key: 'tooltip-switch', href: '#tooltip-switch', title: 'Tooltip / Switch' },
  { key: 'slider', href: '#slider-demo', title: 'Slider' },
  { key: 'rate', href: '#rate-demo', title: 'Rate' },
  { key: 'data', href: '#data-display', title: 'Avatar / List / …' },
  { key: 'more', href: '#more-components', title: 'Tag / Empty / …' },
];

/** Заголовок страницы в шапке */
export const PAGE_HEADER_TITLE = 'Ant Design';


export const ANT_DESIGN_INTRO = {
  title: 'Что такое Ant Design?',
  definition:
    'Ant Design (antd) — это библиотека React-компонентов и дизайн-система от команды Ant Group. В неё входят готовые элементы интерфейса: формы, таблицы, навигация, обратная связь пользователю и сотни других блоков, свёрстанных по единым правилам доступности и UX.',
  npmPackageUrl: 'https://www.npmjs.com/package/antd',
  githubUrl: 'https://github.com/ant-design/ant-design',
  docsUrl: 'https://ant.design/',
  /** Порядок величины weekly downloads (npm); для точной цифры откройте ссылку на npm */
  weeklyDownloadsHint: '2–4+ млн загрузок в неделю (npm, порядок величины; актуально на момент демо)',
  strengthsTitle: 'Чем удобен antd',
  strengths: [
    'Единый визуальный язык и темизация через ConfigProvider (в т.ч. тёмная тема, как на этой странице).',
    'Много «сложных» компонентов из коробки: Table, Form, DatePicker, Modal — меньше самописной вёрстки.',
    'Хорошая документация, примеры кода и активное сообщество.',
    'Совместимость с современным React (в т.ч. React 19 в актуальных версиях antd 6.x).',
    'Иконки @ant-design/icons согласованы с компонентами.',
  ],
  introFooter:
    'Ниже — живые примеры импорта и использования. Установка и стили описаны в README.md в корне репозитория.',
  /** Текст под шапкой (перед секцией «О Ant Design») */
  leadParagraph:
    'Установка и импорты описаны в README.md. Ниже — одна страница со всеми блоками; якоря в шапке прокручивают к секции.',
};
