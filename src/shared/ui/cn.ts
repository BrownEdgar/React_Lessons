// Утилита для объединения классов Tailwind без конфликтов
// clsx — условные классы, twMerge — дедупликация конфликтующих Tailwind-классов
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]): string => twMerge(clsx(inputs));
