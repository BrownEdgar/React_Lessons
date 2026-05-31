// useId — генерирует уникальный стабильный ID для компонента.
// Решает проблему коллизий при использовании нескольких экземпляров одного компонента
// и корректно работает при server-side rendering (SSR).

import { useId } from 'react';
import './App.css';

function FormField({ label, type = 'text', description }) {
  // : r1: - : r2: - : r3: - ...
  const id = useId();
  const descId = description ? `${id}-desc` : undefined;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        aria-describedby={descId}
        placeholder={`Введите ${label.toLowerCase()}...`}
      />
      {description && (
        <p id={descId} className="field-desc">
          {description}
        </p>
      )}
    </div>
  );
}

function CheckboxGroup({ options }) {
  const groupId = useId();

  return (
    <fieldset className="checkbox-group">
      <legend>Интересы</legend>
      {options.map((opt, i) => {
        const checkId = `${groupId}-${i}`;
        return (
          <div key={opt} className="check-row">
            <input type="checkbox" id={checkId} />
            <label htmlFor={checkId}>{opt}</label>
          </div>
        );
      })}
    </fieldset>
  );
}

export default function App() {
  return (
    <div className="box">
      <h1>useId</h1>
      <p className="desc">
        Каждый вызов <code>useId()</code> возвращает уникальный ID вида{' '}
        <code>:r0:</code>, <code>:r1:</code>… Несколько экземпляров компонента
        не будут иметь конфликтующих ID.
      </p>

      <div className="forms-row">
        <div className="form-card">
          <h2>Форма А</h2>
          <FormField label="Имя" />
          <FormField
            label="Email"
            type="email"
            description="Мы не будем рассылать спам"
          />
          <FormField label="Пароль" type="password" />
        </div>

        <div className="form-card">
          <h2>Форма Б (тот же компонент)</h2>
          <FormField label="Имя" />
          <FormField
            label="Email"
            type="email"
            description="Введите рабочий email"
          />
          <FormField label="Пароль" type="password" />
        </div>
      </div>

      <CheckboxGroup options={['React', 'TypeScript', 'Node.js', 'GraphQL']} />

      <p className="note">
        Открой DevTools и проверь: у каждого инпута уникальный <code>id</code>,
        а у каждого <code>label</code> правильный <code>htmlFor</code>.
      </p>
    </div>
  );
}
