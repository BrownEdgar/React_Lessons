import React, { useState } from 'react';

/* ─────────────────────────────────────────────────────────────
   RENDER PROPS PATTERN
   ─────────────────────────────────────────────────────────────
   Идея: компонент не знает, ЧТО рендерить — он знает только КАК
   получать данные / управлять состоянием. Он передаёт всё, что
   «знает», в функцию-проп, и та решает, как это отобразить.

   Плюсы:
   • Логика и UI полностью разделены
   • Один «умный» компонент — бесконечно разные «лица»
   • Легко тестировать логику отдельно от вёрстки
   ───────────────────────────────────────────────────────────── */

// ── 1. «Умный» компонент — содержит логику переключения вкладок ──

function Tabs({ items, render }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Передаём наружу всё, что нужно для отрисовки:
  // - сам список items
  // - текущий активный индекс
  // - функцию смены вкладки
  // - активный элемент (удобный shortcut)
  return render({
    items,
    activeIndex,
    setActiveIndex,
    activeItem: items[activeIndex],
  });
}

// ── 2. «Умный» компонент — счётчик с шагом ──

function Counter({ step = 1, min = 0, max = 10, render }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => Math.min(c + step, max));
  const decrement = () => setCount((c) => Math.max(c - step, min));
  const reset = () => setCount(0);

  // Компонент ничего не рисует сам — отдаёт управление наружу
  return render({ count, increment, decrement, reset, min, max });
}

// ── 3. «Умный» компонент — hover-состояние ──

function Hoverable({ render }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'inline-block' }}
    >
      {/* render получает булево значение — потребитель сам решает,
          что с ним делать */}
      {render({ isHovered })}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// ДЕМОНСТРАЦИЯ — три разных UI для трёх «умных» компонентов
// ═══════════════════════════════════════════════════════════════

const TABS = [
  { id: 'js', label: '⚡ JavaScript', color: '#f7df1e', bg: '#fffbeb', content: 'Динамический язык для веба. Работает в браузере и на сервере (Node.js).' },
  { id: 'ts', label: '🔷 TypeScript', color: '#3178c6', bg: '#eff6ff', content: 'Строготипизированное надмножество JS. Ловит ошибки ещё на этапе написания кода.' },
  { id: 'jsx', label: '⚛️  JSX / React', color: '#61dafb', bg: '#ecfeff', content: 'Синтаксический сахар для React.createElement. Позволяет писать HTML прямо в JS.' },
];

export default function App() {
  return (
    <div style={styles.page}>
      <h1 style={styles.pageTitle}>Render Props Pattern</h1>
      <p style={styles.pageSubtitle}>
        Один «умный» компонент — разные UI. Логика отделена от представления.
      </p>

      {/* ── Пример 1: вкладки ── */}
      <Section title="Пример 1 — Вкладки" badge="Tabs">
        <Tabs
          items={TABS}
          render={({ items, activeIndex, setActiveIndex, activeItem }) => (
            <div>
              {/* Шапка с кнопками — потребитель рисует их сам */}
              <div style={styles.tabBar}>
                {items.map((tab, i) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveIndex(i)}
                    style={{
                      ...styles.tabBtn,
                      borderBottom: activeIndex === i
                        ? `3px solid ${tab.color}`
                        : '3px solid transparent',
                      color: activeIndex === i ? tab.color : '#6b7280',
                      fontWeight: activeIndex === i ? 700 : 400,
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Содержимое активной вкладки */}
              <div style={{ ...styles.tabContent, background: activeItem.bg }}>
                <p style={styles.tabText}>{activeItem.content}</p>
              </div>
            </div>
          )}
        />
      </Section>

      {/* ── Пример 2: счётчик — два разных UI для одной логики ── */}
      <Section title="Пример 2 — Счётчик (одна логика, два вида)" badge="Counter">
        <div style={styles.row}>

          {/* Вид A: минималистичный */}
          <div style={styles.card}>
            <p style={styles.cardLabel}>Минималистичный UI</p>
            <Counter
              step={1}
              max={5}
              render={({ count, increment, decrement, min, max }) => (
                <div style={styles.counterMin}>
                  <button onClick={decrement} style={styles.btnGhost} disabled={count <= min}>−</button>
                  <span style={styles.counterValue}>{count}</span>
                  <button onClick={increment} style={styles.btnGhost} disabled={count >= max}>+</button>
                </div>
              )}
            />
          </div>

          {/* Вид B: с прогресс-баром — та же логика, другое представление */}
          <div style={styles.card}>
            <p style={styles.cardLabel}>UI с прогресс-баром</p>
            <Counter
              step={1}
              max={5}
              render={({ count, increment, decrement, reset, min, max }) => (
                <div>
                  <div style={styles.progressTrack}>
                    <div
                      style={{
                        ...styles.progressFill,
                        width: `${(count / max) * 100}%`,
                        background: count === max ? '#10b981' : '#6366f1',
                      }}
                    />
                  </div>
                  <p style={styles.progressLabel}>{count} / {max}</p>
                  <div style={styles.counterMin}>
                    <button onClick={decrement} style={styles.btnSolid} disabled={count <= min}>−</button>
                    <button onClick={reset} style={styles.btnOutline}>сброс</button>
                    <button onClick={increment} style={styles.btnSolid} disabled={count >= max}>+</button>
                  </div>
                </div>
              )}
            />
          </div>
        </div>
      </Section>

      {/* ── Пример 3: hover-карточки ── */}
      <Section title="Пример 3 — Hover-эффект" badge="Hoverable">
        <div style={styles.row}>
          {['React', 'Vue', 'Svelte'].map((name) => (
            <Hoverable
              key={name}
              render={({ isHovered }) => (
                <div
                  style={{
                    ...styles.hoverCard,
                    transform: isHovered ? 'translateY(-6px)' : 'none',
                    boxShadow: isHovered
                      ? '0 12px 28px rgba(99,102,241,.25)'
                      : '0 2px 8px rgba(0,0,0,.08)',
                    background: isHovered ? '#6366f1' : '#fff',
                    color: isHovered ? '#fff' : '#1f2937',
                  }}
                >
                  <span style={{ fontSize: 28 }}>
                    {name === 'React' ? '⚛️' : name === 'Vue' ? '💚' : '🔥'}
                  </span>
                  <strong style={{ marginTop: 8 }}>{name}</strong>
                  <span style={{ fontSize: 12, opacity: 0.7, marginTop: 4 }}>
                    {isHovered ? 'Нравится!' : 'Наведи мышь'}
                  </span>
                </div>
              )}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

// ── Вспомогательный layout-компонент ──
function Section({ title, badge, children }) {
  return (
    <section style={styles.section}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.sectionTitle}>{title}</h2>
        <code style={styles.badge}>{`<${badge} render={...} />`}</code>
      </div>
      {children}
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════
// СТИЛИ
// ═══════════════════════════════════════════════════════════════

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f0f4ff 0%, #faf5ff 100%)',
    padding: '40px 20px',
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 800,
    color: '#1f2937',
    margin: '0 0 8px',
  },
  pageSubtitle: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 15,
    margin: '0 0 40px',
  },
  section: {
    maxWidth: 720,
    margin: '0 auto 32px',
    background: '#fff',
    borderRadius: 16,
    padding: 28,
    boxShadow: '0 4px 16px rgba(0,0,0,.07)',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 700,
    color: '#111827',
    margin: 0,
  },
  badge: {
    background: '#f3f4f6',
    color: '#6366f1',
    padding: '4px 10px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
  },
  // Tabs
  tabBar: {
    display: 'flex',
    gap: 4,
    borderBottom: '1px solid #e5e7eb',
    marginBottom: 16,
  },
  tabBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '8px 14px',
    fontSize: 13,
    transition: 'all .15s',
    borderRadius: '6px 6px 0 0',
  },
  tabContent: {
    borderRadius: 10,
    padding: '14px 18px',
  },
  tabText: {
    margin: 0,
    fontSize: 14,
    lineHeight: 1.6,
    color: '#374151',
  },
  // Counter
  row: {
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
  },
  card: {
    flex: 1,
    minWidth: 200,
    background: '#f9fafb',
    borderRadius: 12,
    padding: 20,
  },
  cardLabel: {
    margin: '0 0 14px',
    fontSize: 13,
    color: '#9ca3af',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '.04em',
  },
  counterMin: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  },
  counterValue: {
    fontSize: 32,
    fontWeight: 800,
    color: '#111827',
    minWidth: 40,
    textAlign: 'center',
  },
  btnGhost: {
    width: 38, height: 38,
    borderRadius: '50%',
    border: '2px solid #d1d5db',
    background: '#fff',
    fontSize: 20,
    cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    transition: 'all .15s',
  },
  btnSolid: {
    width: 36, height: 36,
    borderRadius: 8,
    border: 'none',
    background: '#6366f1',
    color: '#fff',
    fontSize: 18,
    cursor: 'pointer',
    fontWeight: 700,
  },
  btnOutline: {
    padding: '6px 12px',
    borderRadius: 8,
    border: '1.5px solid #d1d5db',
    background: '#fff',
    fontSize: 12,
    cursor: 'pointer',
    color: '#6b7280',
    fontWeight: 600,
  },
  progressTrack: {
    height: 8,
    borderRadius: 99,
    background: '#e5e7eb',
    marginBottom: 6,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 99,
    transition: 'width .3s ease, background .3s',
  },
  progressLabel: {
    margin: '0 0 12px',
    fontSize: 13,
    color: '#6b7280',
    fontWeight: 600,
  },
  // Hoverable
  hoverCard: {
    flex: 1,
    minWidth: 140,
    borderRadius: 14,
    padding: '20px 16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'default',
    transition: 'all .25s ease',
  },
};
