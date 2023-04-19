export interface AuthStateType {
  user: UserType | null;
  deviceId: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export interface UserType {
  id: number;
  username: string;
  email: string;
  password: string;
  contact: null;
  avatar: null;
  role: RoleType;
  isEmailVerified: boolean;
  isContactVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export type RoleType = 'admin' | 'user';
