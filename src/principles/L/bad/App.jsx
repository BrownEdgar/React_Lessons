// ❌ ПЛОХО: ReadonlyInput нарушает LSP — принимает onChange, но тихо игнорирует его.
import React, { useState } from 'react';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';
import './App.scss';

function Input({ value, onChange, placeholder }) {
  return (
    <input className="lsp-bad__field" value={value} onChange={onChange} placeholder={placeholder} />
  );
}

// Нарушение LSP: притворяется совместимым с Input, но onChange подменяет пустой функцией
function ReadonlyInput({ value, onChange, placeholder }) {
  return (
    <input
      className="lsp-bad__field lsp-bad__field--readonly"
      value={value}
      onChange={() => {}}
      readOnly
      placeholder={placeholder}
    />
  );
}

export function App() {
  const [text, setText] = useState('Попробуй отредактировать меня');
  const [locked, setLocked] = useState('Я тоже жду изменений...');

  return (
    <PrinciplePage>
      <h1 className="Title">
        <span>L</span>iskov Substitution — ❌ BAD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <PrinciplePanel variant="info">
        <h2>📖 Liskov Substitution Principle (LSP)</h2>
        <p>
          <strong>
            Подтип должен быть полностью заменим на базовый тип без нарушения поведения программы.
          </strong>{' '}
          Если у тебя есть <code>Input</code> с prop <code>onChange</code>, то любой его «наследник»
          (например <code>ReadonlyInput</code>) должен вести себя предсказуемо — не нарушать
          ожиданий вызывающего кода.
        </p>
        <p>
          В React это про честность интерфейса (props): если компонент принимает prop — значит он
          его использует. Принять prop и проигнорировать — это ложь, которая приводит к
          трудноуловимым багам.
        </p>
      </PrinciplePanel>

      {/* ───── Что конкретно плохо ───── */}
      <PrinciplePanel variant="pointsBad">
        <h3>❌ В чём нарушение LSP:</h3>
        <ul>
          <li>
            <code>ReadonlyInput</code> объявляет prop <code>onChange</code> — это обещание его
            вызвать
          </li>
          <li>
            Но внутри подменяет его на <code>{'() => {}'}</code> — обещание нарушено
          </li>
          <li>
            Вызывающий код передаёт <code>onChange={'e => setLocked(e.target.value)'}</code> и ждёт
            обновления состояния
          </li>
          <li>
            Состояние <strong>никогда не обновится</strong> — это тихий баг, который сложно заметить
          </li>
          <li>
            Заменить <code>Input</code> на <code>ReadonlyInput</code> нельзя — поведение меняется
            неожиданно
          </li>
        </ul>
      </PrinciplePanel>

      {/* ───── Демо ───── */}
      <PrinciplePanel variant="demo">
        <p className="lsp-bad__demo-lead">🎮 Попробуй набирать текст в обоих полях:</p>
        <div className="lsp-bad__demo-stack">
          <div>
            <label className="lsp-bad__label lsp-bad__label--ok">
              ✅ Input — onChange работает нормально:
            </label>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Введи текст"
            />
            <span className="lsp-bad__value-hint">Значение: «{text}»</span>
          </div>
          <div>
            <label className="lsp-bad__label lsp-bad__label--bad">
              ❌ ReadonlyInput — onChange передан, но состояние никогда не меняется:
            </label>
            <ReadonlyInput
              value={locked}
              onChange={(e) => setLocked(e.target.value)}
              placeholder="Попробуй изменить..."
            />
            <span className="lsp-bad__value-hint lsp-bad__value-hint--error">
              Значение: «{locked}» — оно зафиксировано навсегда, хотя мы передали onChange
            </span>
          </div>
        </div>
      </PrinciplePanel>

      {/* ───── Код ───── */}
      <PrinciplePanel variant="code">
        {`// Вызывающий код доверяет интерфейсу:
<ReadonlyInput
  value={locked}
  onChange={e => setLocked(e.target.value)} // ← передан и ждёт вызова
/>

// Внутри ReadonlyInput — обман:
function ReadonlyInput({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={() => {}} // ← onChange принят, но выброшен!
      readOnly
    />
  )
  // состояние setLocked никогда не вызовется — тихий баг
}`}
      </PrinciplePanel>
    </PrinciplePage>
  );
}
