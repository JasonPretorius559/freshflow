import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import AUTH_ENDPOINTS from '../enviroment/endpoints';

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenKey = 'token';

  constructor(private http: HttpClient) {}

  // ---- LOGIN ----
  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(AUTH_ENDPOINTS.login, { email, password })
      .pipe(
        tap(res => this.setToken(res.token)) // save token on successful login
      );
  }

  // ---- REGISTER ----
  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(AUTH_ENDPOINTS.register, data);
  }


  // ---- TOKEN STORAGE ----
  private setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  clearToken() {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
