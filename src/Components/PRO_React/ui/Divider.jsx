export function Divider({ className = '' }) {
  return (
    <div
      className={`my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-700 ${className}`}
      role='separator'
      aria-orientation='horizontal'
    />
  );
}
