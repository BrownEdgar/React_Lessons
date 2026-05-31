// ✅ ХОРОШО: каждый компонент принимает только нужные ему поля.
import React from 'react';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';

const user = {
  id: 42,
  name: 'Иван Петров',
  email: 'ivan@example.com',
  avatar: 'https://i.pravatar.cc/80?img=3',
  role: 'admin',
  permissions: ['read', 'write', 'delete'],
  settings: { theme: 'dark', language: 'ru', notifications: true },
  createdAt: '2023-01-15',
};

// Только name и avatar — ничего лишнего
function UserAvatar({ name, avatar }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img
        src={avatar}
        alt={name}
        style={{
          width: 52,
          height: 52,
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #86efac',
        }}
      />
      <span style={{ fontWeight: 700, fontSize: 16 }}>{name}</span>
    </div>
  );
}

// Только role и permissions — ничего лишнего
function UserBadge({ role, permissions }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <span
        style={{
          background: '#7c3aed',
          color: '#fff',
          padding: '3px 12px',
          borderRadius: 12,
          fontSize: 13,
          fontWeight: 600,
        }}
      >
        {role}
      </span>
      {permissions.map((p) => (
        <span
          key={p}
          style={{
            background: '#f3f4f6',
            padding: '3px 10px',
            borderRadius: 10,
            fontSize: 12,
            color: '#555',
            border: '1px solid #e5e7eb',
          }}
        >
          {p}
        </span>
      ))}
    </div>
  );
}

// Только email — ничего лишнего
function UserContacts({ email }) {
  return (
    <a
      href={`mailto:${email}`}
      style={{
        color: '#3b82f6',
        fontSize: 15,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: 6,
      }}
    >
      ✉️ {email}
    </a>
  );
}

export function App() {
  return (
    <PrinciplePage>
      <h1 className="Title">
        <span>I</span>nterface Segregation — ✅ GOOD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <PrinciplePanel variant="info">
        <h2>📖 Interface Segregation Principle (ISP)</h2>
        <p>
          <strong>Клиент не должен зависеть от интерфейсов, которые он не использует.</strong>{' '}
          Каждый компонент явно описывает минимально необходимый набор props — только то, что
          действительно нужно.
        </p>
        <p>
          Узкий, точный интерфейс — это явное документирование зависимостей. Видишь сигнатуру{' '}
          <code>{'{ name, avatar }'}</code> — и сразу понимаешь, что этому компоненту больше ничего
          не нужно.
        </p>
      </PrinciplePanel>

      {/* ───── Что конкретно хорошо ───── */}
      <PrinciplePanel variant="pointsGood">
        <h3>✅ Преимущества точных интерфейсов:</h3>
        <ul>
          <li>
            Переименовали <code>user.settings</code>? <code>UserAvatar</code> и{' '}
            <code>UserBadge</code> об этом <strong>даже не узнают</strong>
          </li>
          <li>
            Тестировать легко: <code>{'<UserAvatar name="Тест" avatar="..." />'}</code> — никакого
            полного объекта
          </li>
          <li>
            Переиспользовать просто: компонент не привязан к структуре <code>user</code>, работает с
            любыми данными
          </li>
          <li>Интерфейс самодокументирует: из props сразу видно, что нужно компоненту</li>
          <li>Изменение одного компонента не требует обновления остальных</li>
        </ul>
      </PrinciplePanel>

      {/* ───── Демо ───── */}
      <PrinciplePanel variant="demo">
        <p style={{ margin: '0 0 4px', fontWeight: 600, color: '#374151' }}>
          🎮 Демонстрация — каждый компонент получает ровно то, что ему нужно:
        </p>
        <p style={{ margin: '0 0 16px', fontSize: 13, color: '#16a34a' }}>
          ✅ Изменение любого другого поля user (settings, createdAt...) не затронет эти компоненты
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            padding: '16px',
            background: '#fff',
            border: '1px solid #f3f4f6',
            borderRadius: 8,
          }}
        >
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 12, color: '#16a34a', fontWeight: 600 }}>
              UserAvatar получает: name, avatar (2/8 полей)
            </p>
            <UserAvatar name={user.name} avatar={user.avatar} />
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6' }} />
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 12, color: '#16a34a', fontWeight: 600 }}>
              UserBadge получает: role, permissions (2/8 полей)
            </p>
            <UserBadge role={user.role} permissions={user.permissions} />
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #f3f4f6' }} />
          <div>
            <p style={{ margin: '0 0 8px', fontSize: 12, color: '#16a34a', fontWeight: 600 }}>
              UserContacts получает: email (1/8 полей)
            </p>
            <UserContacts email={user.email} />
          </div>
        </div>
      </PrinciplePanel>

      {/* ───── Код ───── */}
      <PrinciplePanel variant="code">
        {`// Каждый компонент — минимальный точный интерфейс
function UserAvatar({ name, avatar }) { ... }    // 2 поля
function UserBadge({ role, permissions }) { ... } // 2 поля
function UserContacts({ email }) { ... }          // 1 поле

// Использование — передаём только нужное:
<UserAvatar name={user.name} avatar={user.avatar} />
<UserBadge  role={user.role} permissions={user.permissions} />
<UserContacts email={user.email} />

// Изменение user.settings → никто из них не пострадает`}
      </PrinciplePanel>
    </PrinciplePage>
  );
}
