// useInsertionEffect — срабатывает ДО любых DOM-мутаций React.
// Предназначен для CSS-in-JS библиотек: вставить <style> теги прежде,
// чем компоненты прочитают layout. Обычный код использует useEffect/useLayoutEffect.

import { useInsertionEffect, useState } from 'react';
import './App.css';

const themes = {
  ocean: {
    '--card-bg': '#0077b6',
    '--card-text': '#caf0f8',
    '--card-border': '#90e0ef',
  },
  sunset: {
    '--card-bg': '#c9184a',
    '--card-text': '#fff0f3',
    '--card-border': '#ff4d6d',
  },
  forest: {
    '--card-bg': '#1b4332',
    '--card-text': '#d8f3dc',
    '--card-border': '#52b788',
  },
};

function useThemeInjector(themeName) {
  // useInsertionEffect — правильное место для CSS-in-JS библиотек:
  // вставляет стили ДО того, как React применит DOM-изменения.
  useInsertionEffect(() => {
    const vars = themes[themeName];
    if (!vars) return;

    const styleId = 'dynamic-theme-vars';
    let tag = document.getElementById(styleId);
    if (!tag) {
      tag = document.createElement('style');
      tag.id = styleId;
      document.head.appendChild(tag);
    }

    const cssVars = Object.entries(vars)
      .map(([k, v]) => `${k}: ${v};`)
      .join('\n  ');

    tag.textContent = `:root {\n  ${cssVars}\n}`;

    return () => tag.remove();
  }, [themeName]);
}

export default function App() {
  const [theme, setTheme] = useState('ocean');
  useThemeInjector(theme);

  return (
    <div className="box">
      <h1>useInsertionEffect</h1>
      <p className="desc">
        CSS-переменные вставляются через <code>&lt;style&gt;</code> тег{' '}
        <em>до</em> отрисовки DOM — именно так работают CSS-in-JS библиотеки
        (styled-components, emotion).
      </p>
      <div className="theme-card">
        <p>Текущая тема: <strong>{theme}</strong></p>
        <p>CSS-переменные применены через useInsertionEffect</p>
      </div>
      <div className="btn-row">
        {Object.keys(themes).map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={theme === t ? 'active' : ''}
          >
            {t}
          </button>
        ))}
      </div>
      <p className="warning">
        ⚠️ Нельзя вызывать setState или читать refs внутри useInsertionEffect
      </p>
    </div>
  );
}
