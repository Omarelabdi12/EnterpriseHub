import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  private readonly authService = inject(AuthService);

  email = '';
  password = '';

  onSubmit(): void {
    this.authService.login({
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        console.log('Login réussi');
        console.log('JWT:', response.token);
        console.log('Utilisateur:', response);
      },
      error: (error) => {
        console.error('Login échoué:', error);
      }
    });
  }
}