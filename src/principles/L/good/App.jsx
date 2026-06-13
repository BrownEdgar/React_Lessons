// ✅ ХОРОШО: ReadonlyInput честно описывает контракт — не принимает onChange совсем.
import React, { useState } from 'react';
import './App.scss';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';

function Input({ value, onChange, placeholder }) {
  return <input className="base-input" value={value} onChange={onChange} placeholder={placeholder} />;
}

// Честный контракт: нет onChange в интерфейсе — нет ложных обещаний
function ReadonlyInput({ value, placeholder }) {
  return (
    <input
      className="base-input base-input--readonly"
      value={value}
      readOnly
      placeholder={placeholder}
    />
  );
}

export function App() {
  const [text, setText] = useState('Попробуй отредактировать меня');

  return (
    <PrinciplePage>
      <h1 className="Title">
        <span>L</span>iskov Substitution — ✅ GOOD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <PrinciplePanel variant="info">
        <h2>📖 Liskov Substitution Principle (LSP)</h2>
        <p>
          <strong>Подтип должен быть заменим на базовый тип без неожиданных сюрпризов.</strong>{' '}
          Честный компонент не принимает props, которые не использует — тем самым исключает ложные
          ожидания.
        </p>
        <p>
          Если компонент не поддерживает редактирование — он не должен делать вид, что поддерживает.
          Явный интерфейс лучше молчаливого игнорирования.
        </p>
      </PrinciplePanel>

      {/* ───── Что конкретно хорошо ───── */}
      <PrinciplePanel variant="pointsGood">
        <h3>✅ Как LSP соблюдается здесь:</h3>
        <ul>
          <li>
            <code>ReadonlyInput</code> не принимает <code>onChange</code> — его нет в сигнатуре
          </li>
          <li>TypeScript или просто логика подскажут: «этот компонент не редактируется»</li>
          <li>Нет скрытых ловушек: поведение компонента полностью описывается его props</li>
          <li>
            <code>Input</code> и <code>ReadonlyInput</code> — честно разные контракты, а не один
            обманутый
          </li>
          <li>Вызывающий код никогда не будет введён в заблуждение</li>
        </ul>
      </PrinciplePanel>

      {/* ───── Демо ───── */}
      <PrinciplePanel variant="demo">
        <p className="lsp-demo-title">
          🎮 Попробуй набирать текст — каждый компонент честен о своих возможностях:
        </p>
        <div className="lsp-demo-col">
          <div>
            <label className="lsp-demo-label lsp-demo-label--green">
              ✅ Input — принимает onChange и честно его вызывает:
            </label>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Введи текст"
            />
            <span className="lsp-demo-hint">Значение: «{text}»</span>
          </div>
          <div>
            <label className="lsp-demo-label lsp-demo-label--blue">
              ✅ ReadonlyInput — не принимает onChange, честно сигнализирует «только чтение»:
            </label>
            <ReadonlyInput
              value="Это значение зафиксировано — и ReadonlyInput честно об этом говорит"
              placeholder="Только чтение"
            />
            <span className="lsp-demo-hint">
              Курсор: not-allowed | onChange отсутствует в интерфейсе — никакого обмана
            </span>
          </div>
        </div>
      </PrinciplePanel>

      {/* ───── Код ───── */}
      <PrinciplePanel variant="code">
        {`// Input: принимает onChange — честно его вызывает
function Input({ value, onChange, placeholder }) {
  return <input value={value} onChange={onChange} ... />
}

// ReadonlyInput: НЕ принимает onChange — контракт явный
function ReadonlyInput({ value, placeholder }) {
  return <input value={value} readOnly ... />
  // нет onChange в интерфейсе = нет скрытых сюрпризов
}

// Вызывающий код сразу видит разницу:
<Input value={x} onChange={setX} />          // редактируемый
<ReadonlyInput value="фиксировано" />         // только чтение`}
      </PrinciplePanel>
    </PrinciplePage>
  );
}
