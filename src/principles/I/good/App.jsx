// ✅ ХОРОШО: каждый компонент принимает только нужные ему поля.
import React from 'react';
import './App.scss';
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
    <div className="user-avatar">
      <img src={avatar} alt={name} className="user-avatar__img" />
      <span className="user-avatar__name">{name}</span>
    </div>
  );
}

// Только role и permissions — ничего лишнего
function UserBadge({ role, permissions }) {
  return (
    <div className="user-badge">
      <span className="user-badge__role">{role}</span>
      {permissions.map((p) => (
        <span key={p} className="user-badge__perm">{p}</span>
      ))}
    </div>
  );
}

// Только email — ничего лишнего
function UserContacts({ email }) {
  return (
    <a href={`mailto:${email}`} className="user-contacts">
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
        <p className="isp-demo-title">
          🎮 Демонстрация — каждый компонент получает ровно то, что ему нужно:
        </p>
        <p className="isp-demo-subtitle">
          ✅ Изменение любого другого поля user (settings, createdAt...) не затронет эти компоненты
        </p>
        <div className="isp-demo-container">
          <div>
            <p className="isp-demo-label">UserAvatar получает: name, avatar (2/8 полей)</p>
            <UserAvatar name={user.name} avatar={user.avatar} />
          </div>
          <hr className="isp-demo-divider" />
          <div>
            <p className="isp-demo-label">UserBadge получает: role, permissions (2/8 полей)</p>
            <UserBadge role={user.role} permissions={user.permissions} />
          </div>
          <hr className="isp-demo-divider" />
          <div>
            <p className="isp-demo-label">UserContacts получает: email (1/8 полей)</p>
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
