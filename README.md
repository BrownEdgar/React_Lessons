# Ant Design — демо в этом репозитории

Учебные примеры компонентов [Ant Design](https://ant.design/components/overview/) на React.

## Что установить

В корне проекта выполните:

```bash
npm install antd @ant-design/icons
```

- **`antd`** — библиотека компонентов UI.
- **`@ant-design/icons`** — иконки Ant Design (часто используются вместе с кнопками, меню, бейджами).

## Подключение стилей

В точке входа (у нас [`src/main.jsx`](src/main.jsx)) нужен сброс/базовые стили antd **рядом** с вашим глобальным CSS:

```js
import 'antd/dist/reset.css';
import './index.css';
```

Порядок важен: сначала стили antd, затем ваши — так проще переопределять отступы и фон при необходимости.

## Локализация (по желанию)

Для русских подписей в датах, пагинации и т.п. оберните приложение в `ConfigProvider` с `locale`:

```js
import { ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU';

<ConfigProvider locale={ruRU}>{/* ваше приложение */}</ConfigProvider>
```

В демо [`src/App.jsx`](src/App.jsx) это уже сделано.

## Документация

- [Обзор компонентов](https://ant.design/components/overview/)
- [Начало работы (React)](https://ant.design/docs/react/getting-started)

## Запуск

```bash
npm run dev
```

Откроется Vite-приложение с одной страницей, где собраны примеры из папки [`src/Examples`](src/Examples).
