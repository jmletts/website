import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../Interfaces/user';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../Services/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { LoaderComponent } from '../../../components/loader/loader.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, LoaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  formLogin: FormGroup;
  displayError: boolean = false;
  loading: boolean = false;

  constructor(
    private form: FormBuilder,
    private _userService: UserService,
    private router: Router
  ) {
    this.formLogin = this.form.group({
      email: ['', [Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  logIn() {
    this.formLogin.markAllAsTouched(); // Marca todos los campos como "tocados"
    if (this.formLogin.invalid) {
      console.log('Formulario inválido:', this.formLogin.errors);
      return;
    }

    const user: User = {
      email: this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value,
    };

    this.loading = true; // Activa el estado de carga

    setTimeout(() => {
      this._userService.logIn(user).subscribe({
        next: (response: any) => {
          // this.loading = false; // Desactiva el estado de carga después de la respuesta
          const token = response.token;
          console.log(token);
          this.formLogin.reset();
          localStorage.setItem('token', token);
          this.loading = false;
          this.router.navigate(['/dashboard']); // Desactiva el estado de carga después de la respuesta
        },
        error: (event: HttpErrorResponse) => {
          //this.loading = false; // Desactiva el estado de carga en caso de error
          if (event.error.msg) {
            console.log(event.error.msg);
          } else {
            console.error('Hay un error en el servidor');
          }
        },
        complete: () => {
          console.info('complete');
        },
      });
    }, 2000);

  }
}
