// ❌ ПЛОХО: Button нарушает OCP — каждый новый тип требует изменения самого компонента.
import React from 'react';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';
import './App.scss';

function buttonVariant(type) {
  switch (type) {
    case 'primary':
      return 'primary';
    case 'danger':
      return 'danger';
    case 'success':
      return 'success';
    default:
      return 'default';
  }
}

function Button({ type, onClick, children }) {
  const variant = buttonVariant(type);
  return (
    <button type="button" className={`ocp-bad-button ocp-bad-button--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function App() {
  return (
    <PrinciplePage>
      <h1 className="Title">
        <span>O</span>pen / Closed — ❌ BAD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <PrinciplePanel variant="info">
        <h2>📖 Open / Closed Principle (OCP)</h2>
        <p>
          <strong>
            Программные сущности должны быть открыты для расширения, но закрыты для изменения.
          </strong>{' '}
          То есть добавлять новое поведение нужно без правки уже работающего кода.
        </p>
        <p>
          Принцип защищает от «эффекта домино»: когда правка одной маленькой вещи ломает то, что уже
          работало. Чем стабильнее базовый компонент — тем меньше регрессий.
        </p>
      </PrinciplePanel>

      {/* ───── Что конкретно плохо ───── */}
      <PrinciplePanel variant="pointsBad">
        <h3>❌ Почему этот Button нарушает OCP:</h3>
        <ul>
          <li>
            Хочешь добавить <code>warning</code>-кнопку? Открывай этот файл и вставляй ещё один{' '}
            <code>if</code>
          </li>
          <li>
            Хочешь добавить <code>ghost</code>-кнопку? Снова меняешь тот же компонент
          </li>
          <li>
            Каждая правка — это риск сломать уже работающие <code>primary</code>,{' '}
            <code>danger</code>, <code>success</code>
          </li>
          <li>Нет возможности расширить компонент снаружи, не трогая его исходный код</li>
          <li>
            Со временем <code>Button</code> превращается в список <code>if/else</code> на 100+ строк
          </li>
        </ul>
      </PrinciplePanel>

      {/* ───── Демо ───── */}
      <PrinciplePanel variant="demo">
        <p className="ocp-bad__demo-title">
          🎮 Демонстрация — кнопки через prop <code>type</code>:
        </p>
        <div className="ocp-bad__demo-buttons">
          <Button type="primary">Primary</Button>
          <Button type="danger">Danger</Button>
          <Button type="success">Success</Button>
          <Button>Default</Button>
        </div>
        <p className="ocp-bad__demo-note">
          ⚠️ Попробуй добавить кнопку типа «Warning» — придётся редактировать исходный код Button
          выше
        </p>
      </PrinciplePanel>

      {/* ───── Код ───── */}
      <PrinciplePanel variant="code">
        {`function Button({ type, onClick, children }) {
  switch (type) {
    case 'primary': ...
    case 'danger':  ...
    case 'success': ...
    default:        ...
  }
  // хочешь 'warning'? — иди менять этот файл ↑
  // хочешь 'ghost'?   — снова меняешь этот файл
  // компонент НЕ закрыт для изменений
}`}
      </PrinciplePanel>
    </PrinciplePage>
  );
}
