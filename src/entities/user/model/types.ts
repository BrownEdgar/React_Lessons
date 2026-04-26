// TypeScript-типы сущности User — используются во всём приложении
import type { ID } from '@shared/types';

export type UserRole = 'admin' | 'editor' | 'viewer';
export type UserStatus = 'active' | 'inactive';

export interface User {
  id: ID;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl: string;
  joinedAt: string;
  department: string;
  status: UserStatus;
}
