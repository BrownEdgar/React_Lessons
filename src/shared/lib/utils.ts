// Общие утилиты приложения

// Форматирование цены в рублях
export const formatPrice = (price: number): string =>
  price.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 });

// Форматирование даты в читаемый вид
export const formatDate = (isoDate: string): string =>
  new Date(isoDate).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
