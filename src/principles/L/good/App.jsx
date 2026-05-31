// ✅ ХОРОШО: ReadonlyInput честно описывает контракт — не принимает onChange совсем.
import React, { useState } from 'react';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';

const baseInput = {
  padding: '8px 12px',
  border: '1px solid #ccc',
  borderRadius: 6,
  fontSize: 15,
  width: '100%',
  outline: 'none',
  boxSizing: 'border-box',
};

function Input({ value, onChange, placeholder }) {
  return <input style={baseInput} value={value} onChange={onChange} placeholder={placeholder} />;
}

// Честный контракт: нет onChange в интерфейсе — нет ложных обещаний
function ReadonlyInput({ value, placeholder }) {
  return (
    <input
      style={{ ...baseInput, background: '#f5f5f5', color: '#888', cursor: 'not-allowed' }}
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
        <p style={{ margin: '0 0 16px', fontWeight: 600, color: '#374151' }}>
          🎮 Попробуй набирать текст — каждый компонент честен о своих возможностях:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: 13,
                color: '#16a34a',
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              ✅ Input — принимает onChange и честно его вызывает:
            </label>
            <Input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Введи текст"
            />
            <span style={{ fontSize: 12, color: '#6b7280', marginTop: 4, display: 'block' }}>
              Значение: «{text}»
            </span>
          </div>
          <div>
            <label
              style={{
                display: 'block',
                fontSize: 13,
                color: '#2563eb',
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              ✅ ReadonlyInput — не принимает onChange, честно сигнализирует «только чтение»:
            </label>
            <ReadonlyInput
              value="Это значение зафиксировано — и ReadonlyInput честно об этом говорит"
              placeholder="Только чтение"
            />
            <span style={{ fontSize: 12, color: '#6b7280', marginTop: 4, display: 'block' }}>
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
