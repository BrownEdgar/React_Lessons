// ✅ ХОРОШО: базовый Button закрыт для изменений, но открыт для расширения через обёртки.
import React from 'react';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';
import { PrimaryButton, DangerButton, SuccessButton, WarningButton, GhostButton } from './Button';
import './App.scss';

export function App() {
  return (
    <PrinciplePage>
      <h1 className="Title">
        <span>O</span>pen / Closed — ✅ GOOD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <PrinciplePanel variant="info">
        <h2>📖 Open / Closed Principle (OCP)</h2>
        <p>
          <strong>Открыт для расширения, закрыт для изменения.</strong> Новую функциональность
          добавляй созданием нового кода — а не правкой существующего.
        </p>
        <p>
          Чем реже трогаешь уже работающий код — тем меньше шанс что-то сломать. Стабильный базовый
          компонент — это фундамент, на который можно надёжно опираться.
        </p>
      </PrinciplePanel>

      {/* ───── Что конкретно хорошо ───── */}
      <PrinciplePanel variant="pointsGood">
        <h3>✅ Почему этот подход соблюдает OCP:</h3>
        <ul>
          <li>
            <code>Button</code> — базовый компонент: стабильный,{' '}
            <strong>никогда не меняется</strong>
          </li>
          <li>
            Каждый тип кнопки — отдельный компонент-обёртка, создаётся без правки{' '}
            <code>Button</code>
          </li>
          <li>
            Добавить <code>GhostButton</code> = написать одну строку, не трогая остальное
          </li>
          <li>
            Если <code>Button</code> содержит баг — исправляем в одном месте, все обёртки получают
            фикс автоматически
          </li>
          <li>
            Каждый тип независим: можно удалить <code>WarningButton</code>, не затронув остальные
          </li>
        </ul>
      </PrinciplePanel>

      {/* ───── Демо ───── */}
      <PrinciplePanel variant="demo">
        <p className="ocp-good__demo-title">
          🎮 Демонстрация — каждый тип это отдельный компонент:
        </p>
        <div className="ocp-good__demo-buttons">
          <PrimaryButton>Primary</PrimaryButton>
          <DangerButton>Danger</DangerButton>
          <SuccessButton>Success</SuccessButton>
          <WarningButton>Warning</WarningButton>
          <GhostButton>Ghost</GhostButton>
        </div>
        <p className="ocp-good__demo-note">
          ✅ <code>GhostButton</code> добавлен без единого изменения в <code>Button</code>
        </p>
      </PrinciplePanel>

      {/* ───── Код ───── */}
      <PrinciplePanel variant="code">
        {`// Базовый Button — стабильный, не меняется никогда
function Button({ className = '', ...props }) {
  return <button className={\`btn \${className}\`} {...props} />
}

// Расширяем: создаём обёртки — Button не трогаем
const PrimaryButton = (props) => <Button {...props} className="btn--primary" />
const WarningButton = (props) => <Button {...props} className="btn--warning" />
// Добавить новый тип = одна строка, нулевой риск сломать старое`}
      </PrinciplePanel>
    </PrinciplePage>
  );
}
