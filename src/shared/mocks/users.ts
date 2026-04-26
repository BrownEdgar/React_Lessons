// Тестовые данные пользователей — используются в Card, Table, DataList, Dialog примерах
import type { User } from '@entities/user';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'Алексей Иванов',
    email: 'alex.ivanov@example.com',
    role: 'admin',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    joinedAt: '2023-01-15',
    department: 'Инженерия',
    status: 'active',
  },
  {
    id: '2',
    name: 'Мария Петрова',
    email: 'maria.petrova@example.com',
    role: 'editor',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    joinedAt: '2023-04-22',
    department: 'Дизайн',
    status: 'active',
  },
  {
    id: '3',
    name: 'Дмитрий Сидоров',
    email: 'dmitry.sidorov@example.com',
    role: 'viewer',
    avatarUrl: 'https://i.pravatar.cc/150?img=8',
    joinedAt: '2024-02-10',
    department: 'Аналитика',
    status: 'inactive',
  },
  {
    id: '4',
    name: 'Елена Козлова',
    email: 'elena.kozlova@example.com',
    role: 'editor',
    avatarUrl: 'https://i.pravatar.cc/150?img=47',
    joinedAt: '2024-06-01',
    department: 'Маркетинг',
    status: 'active',
  },
];
