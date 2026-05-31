// Простой внешний стор для демонстрации useSyncExternalStore.
// В реальных проектах это может быть Redux, Zustand, или любой pub/sub.

let state = {
  count: 0,
  theme: 'dark',
  user: 'Гость',
};

const listeners = new Set();

function notifyListeners() {
  listeners.forEach((fn) => fn());
}

export const store = {
  getSnapshot() {
    return state;
  },

  subscribe(listener) {
    listeners.add(listener);
    return () => listeners.delete(listener);
  },

  increment() {
    state = { ...state, count: state.count + 1 };
    notifyListeners();
  },

  decrement() {
    state = { ...state, count: state.count - 1 };
    notifyListeners();
  },

  toggleTheme() {
    state = { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    notifyListeners();
  },

  setUser(name) {
    state = { ...state, user: name };
    notifyListeners();
  },
};
