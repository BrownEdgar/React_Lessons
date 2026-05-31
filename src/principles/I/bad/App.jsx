// ❌ ПЛОХО: компоненты принимают весь объект user, хотя каждый использует лишь часть полей.
import React from 'react';
import { PrinciplePage, PrinciplePanel } from '../../shared/PrincipleLayout';
import './App.scss';

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

function UserAvatar({ user }) {
  // использует только user.avatar и user.name — остальные 6 полей лишние
  return (
    <div className="isp-bad__avatar-row">
      <img className="isp-bad__avatar-img" src={user.avatar} alt={user.name} />
      <span className="isp-bad__avatar-name">{user.name}</span>
    </div>
  );
}

function UserBadge({ user }) {
  // использует только user.role и user.permissions — остальные 6 полей лишние
  return (
    <div className="isp-bad__badge-row">
      <span className="isp-bad__badge-role">{user.role}</span>
      {user.permissions.map((p) => (
        <span key={p} className="isp-bad__badge-perm">
          {p}
        </span>
      ))}
    </div>
  );
}

export function App() {
  return (
    <PrinciplePage>
      <h1 className="Title">
        <span>I</span>nterface Segregation — ❌ BAD
      </h1>

      {/* ───── Что такое принцип ───── */}
      <PrinciplePanel variant="info">
        <h2>📖 Interface Segregation Principle (ISP)</h2>
        <p>
          <strong>Клиент не должен зависеть от интерфейсов, которые он не использует.</strong> В
          React «интерфейс» — это props компонента. Лучше принимать только нужные поля, чем тащить
          весь объект целиком.
        </p>
        <p>
          Компонент, принимающий лишние данные, становится зависим от изменений, которые его не
          касаются. Переименовали <code>user.avatar</code> в <code>user.photo</code>? Упадут все
          компоненты, принимающие <code>user</code>, даже те, что и avatar-то не используют.
        </p>
      </PrinciplePanel>

      {/* ───── Что конкретно плохо ───── */}
      <PrinciplePanel variant="pointsBad">
        <h3>❌ Проблемы этого подхода:</h3>
        <ul>
          <li>
            <code>UserAvatar</code> использует <strong>2 из 8 полей</strong> объекта user, но
            зависит от всего объекта
          </li>
          <li>
            <code>UserBadge</code> использует <strong>2 из 8 полей</strong> — аналогичная проблема
          </li>
          <li>
            Изменение <code>user.settings</code> или <code>user.createdAt</code> технически «ломает»
            эти компоненты (с точки зрения типизации)
          </li>
          <li>
            Сложнее тестировать: нужно создавать полный объект user, хотя большинство полей не нужно
          </li>
          <li>Сложнее переиспользовать: компонент привязан к конкретной форме объекта</li>
        </ul>
      </PrinciplePanel>

      {/* ───── Демо ───── */}
      <PrinciplePanel variant="demo">
        <p className="isp-bad__demo-title">
          🎮 Демонстрация — оба компонента получают весь объект:
        </p>
        <p className="isp-bad__demo-warn">
          ⚠️ Объект user содержит 8 полей. <code>UserAvatar</code> использует 2,{' '}
          <code>UserBadge</code> использует 2. Остальные — лишний груз.
        </p>
        <div className="isp-bad__demo-panel">
          <div>
            <p className="isp-bad__demo-caption">UserAvatar — использует: name, avatar</p>
            <UserAvatar user={user} />
          </div>
          <hr className="isp-bad__demo-divider" />
          <div>
            <p className="isp-bad__demo-caption">UserBadge — использует: role, permissions</p>
            <UserBadge user={user} />
          </div>
        </div>
        <div className="isp-bad__demo-footer">
          <p>
            Неиспользуемые поля: <code>id</code>, <code>email</code>, <code>settings</code>,{' '}
            <code>createdAt</code> и часть остальных — тянутся вхолостую
          </p>
        </div>
      </PrinciplePanel>

      {/* ───── Код ───── */}
      <PrinciplePanel variant="code">
        {`// UserAvatar нужны только name и avatar,
// но он зависит от всего объекта user:
function UserAvatar({ user }) {
  return <img src={user.avatar} alt={user.name} />
  // user.email, user.role, user.permissions... — лишние зависимости
}

// Использование — передаём весь объект:
<UserAvatar user={bigUserObject} />
<UserBadge  user={bigUserObject} />`}
      </PrinciplePanel>
    </PrinciplePage>
  );
}
