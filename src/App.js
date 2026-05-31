import React, { useState } from 'react';
import SRP from './principles/S/SRP';
import OCP from './principles/O/OCP';
import LSP from './principles/L/LSP';
import ISP from './principles/I/ISP';
import DIP from './principles/D/DIP';

const principles = [
  {
    key: 'S',
    label: 'Single Responsibility',
    full: 'S — Единственная ответственность',
    component: SRP,
  },
  { key: 'O', label: 'Open / Closed', full: 'O — Открытость/закрытость', component: OCP },
  { key: 'L', label: 'Liskov Substitution', full: 'L — Подстановка Лисков', component: LSP },
  { key: 'I', label: 'Interface Segregation', full: 'I — Разделение интерфейсов', component: ISP },
  { key: 'D', label: 'Dependency Inversion', full: 'D — Инверсия зависимостей', component: DIP },
];

export default function App() {
  const [active, setActive] = useState('S');
  const current = principles.find((p) => p.key === active);
  const Current = current.component;

  return (
    <div className="Main">
      <h1 className="Title" style={{ marginBottom: 8 }}>
        <span>SOLID</span> принципы в React
      </h1>

      <nav
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: 10,
          padding: '16px 20px',
          marginBottom: 8,
        }}
      >
        {principles.map((p) => (
          <button
            key={p.key}
            onClick={() => setActive(p.key)}
            style={{
              padding: '8px 18px',
              borderRadius: 8,
              border: 'none',
              cursor: 'pointer',
              fontSize: 14,
              fontWeight: 600,
              transition: 'all 0.15s',
              background: active === p.key ? '#dc143c' : '#f3f4f6',
              color: active === p.key ? '#fff' : '#374151',
              boxShadow: active === p.key ? '0 2px 8px rgba(220,20,60,0.3)' : 'none',
            }}
          >
            <strong>{p.key}</strong> — {p.label}
          </button>
        ))}
      </nav>

      <Current />
    </div>
  );
}
