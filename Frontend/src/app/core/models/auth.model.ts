export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

export interface LoginResponse extends AuthUser {
  token: string;
  tokenType: string;
}