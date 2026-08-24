import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  email = '';
  password = '';
  rememberMe = false;

  loading = false;
  errorMessage = '';

  login(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage =
        'Veuillez renseigner votre email et votre mot de passe.';
      return;
    }

    this.loading = true;

    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        console.log('Login réussi');
        console.log('Utilisateur:', response);

        this.authService.saveSession(response);

        this.router.navigate(['/dashboard']);
      },

      error: (error) => {
        console.error('Erreur login:', error);

        this.errorMessage =
          error?.error?.message ||
          'Email ou mot de passe incorrect.';

        this.loading = false;
      },

      complete: () => {
        this.loading = false;
      }
    });
  }
}