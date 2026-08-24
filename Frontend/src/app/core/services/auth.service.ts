import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api';

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  tokenType: string;
  userId: number;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly api = inject(ApiService);
  private readonly router = inject(Router);

  private readonly TOKEN_KEY = 'access_token';
  private readonly USER_KEY = 'opti_user';

  login(credentials: LoginRequest) {
    return this.api.post<LoginResponse>(
      '/auth/login',
      credentials
    );
  }

  saveSession(response: LoginResponse): void {
    localStorage.setItem(this.TOKEN_KEY, response.token);

    localStorage.setItem(
      this.USER_KEY,
      JSON.stringify({
        userId: response.userId,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        role: response.role
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  getUser(): Omit<LoginResponse, 'token' | 'tokenType'> | null {
    const user = localStorage.getItem(this.USER_KEY);

    return user ? JSON.parse(user) : null;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.USER_KEY);

    this.router.navigate(['/login']);
  }
}