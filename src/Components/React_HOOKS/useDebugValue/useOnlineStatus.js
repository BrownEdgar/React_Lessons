import { useState, useEffect, useDebugValue } from 'react';

export function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // useDebugValue добавляет метку в React DevTools рядом с этим хуком.
  // Второй аргумент — функция форматирования (вызывается только в DevTools).
  useDebugValue(isOnline, (online) => (online ? '🟢 Online' : '🔴 Offline'));

  return isOnline;
}
