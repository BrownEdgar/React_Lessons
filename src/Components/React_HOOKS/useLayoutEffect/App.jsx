// useLayoutEffect — срабатывает синхронно после DOM-мутаций, но ДО отрисовки браузером.
// Используй для измерения размеров/позиций элементов, чтобы избежать «мигания» UI.

import { useState, useRef, useLayoutEffect } from 'react';
import './App.css';

function Tooltip({ text, targetRef }) {
  const tooltipRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (!targetRef.current || !tooltipRef.current) return;

    const targetRect = targetRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    // Позиционируем тултип по центру над кнопкой (до отрисовки — нет мигания)
    setPos({
      top: targetRect.top - tooltipRect.height - 10 + window.scrollY,
      left:
        targetRect.left +
        targetRect.width / 2 -
        tooltipRect.width / 2 +
        window.scrollX,
    });
  });

  return (
    <div
      ref={tooltipRef}
      className="tooltip"
      style={{ top: pos.top, left: pos.left }}
    >
      {text}
    </div>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  const btnRef = useRef(null);


  return (
    <div className="box">
      <h1>useLayoutEffect</h1>
      <p className="desc">
        Тултип измеряет свои размеры <em>до</em> отрисовки браузером — поэтому
        никакого «мигания» позиции.
      </p>
      <p className="note">
        Отличие от <code>useEffect</code>: тот срабатывает <em>после</em>{' '}
        отрисовки, что вызвало бы визуальный скачок.
      </p>
      <button
        ref={btnRef}
        className="main-btn"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        Наведи на меня
      </button>
      {show && <Tooltip text="Позиция рассчитана через useLayoutEffect!" targetRef={btnRef} />}
    </div>
  );
}
