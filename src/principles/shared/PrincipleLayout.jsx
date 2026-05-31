import React from 'react';
import './PrincipleLayout.scss';

/** Корневая вёрстка страницы примера (колонка по центру). */
export function PrinciplePage({ children, className = '' }) {
  return (
    <div className={`principle-page${className ? ` ${className}` : ''}`.trim()}>{children}</div>
  );
}

const PANEL_VARIANT_CLASS = {
  info: 'principle-panel--info',
  pointsGood: 'principle-panel--points-good',
  pointsBad: 'principle-panel--points-bad',
  demo: 'principle-panel--demo',
  code: 'principle-panel--code',
};

/**
 * Карточка секции (инфо / плюсы / минусы / демо / блок кода).
 * @param {'info'|'pointsGood'|'pointsBad'|'demo'|'code'} variant
 */
export function PrinciplePanel({ variant = 'demo', children, className = '' }) {
  const mod = PANEL_VARIANT_CLASS[variant] ?? PANEL_VARIANT_CLASS.demo;
  const rootClass = `principle-panel ${mod}${className ? ` ${className}` : ''}`.trim();

  if (variant === 'code') {
    return <pre className={rootClass}>{children}</pre>;
  }

  return <div className={rootClass}>{children}</div>;
}
