import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import notify from 'devextreme/ui/notify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    if (!this.email || !this.password) {
      notify({
        message: 'Please fill in all fields',
        type: 'error',
        displayTime: 2000,
        position: { my: 'top center', at: 'top center', offset: '0 20' }
      });
      return;
    }

    // Call backend API
    this.authService.login(this.email, this.password).subscribe({
      next: (res) => {
        notify({
          message: 'Login successful',
          type: 'success',
          displayTime: 2000,
          position: { my: 'top center', at: 'top center', offset: '0 20' }
        });

        if (res.user) {
          localStorage.setItem('user', JSON.stringify(res.user));
        }

        this.router.navigate(['/dashboard']);
        
      },
      error: (err) => {
        notify({
          message: err.error?.message || 'Login failed',
          type: 'error',
          displayTime: 2000,
          position: { my: 'top center', at: 'top center', offset: '0 20' }
        });
      }
    });
  }
}
