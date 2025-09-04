import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../Interfaces/user';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidationErrors } from '@angular/forms';
import { TokenService } from '../../Services/token.service';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule, CommonModule, RouterLink, LoaderComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent {
  formLogin: FormGroup;
  loading = false;

  constructor(
    private form: FormBuilder,
    private _userService: UserService,
    private router: Router,
    private _tokenService: TokenService
  ) {
    this.formLogin = this.form.group({
      name: ['', [Validators.required]], // Cambiar "email" por "username"
      email: ['', [Validators.email, Validators.required]], // Quitar el validador "email" (no aplica aquí)
      password: ['', [Validators.required, this.validatePassword]], // Quitar el validador "email" (no aplica aquí)
      lastName: ['', [Validators.required]], // Quitar el validador "email" (no aplica aquí)
      terms: [false, [Validators.requiredTrue]], // Quitar el validador "email" (no aplica aquí)
    });
  }

  addUser() {
    this.formLogin.markAllAsTouched(); // Marca todos los campos como "tocados"
    if (this.formLogin.invalid) {
      console.log('Formulario inválido:', this.formLogin.errors);
      return;
    }

    const user: User = {
      name: this.formLogin.get('name')?.value,
      email: this.formLogin.get('email')?.value,
      password: this.formLogin.get('password')?.value,
      lastName: this.formLogin.get('lastName')?.value,
    };

    this.loading = true;
    setTimeout(() => {
      // implemnetar rxjs

      this._userService.signIn(user).subscribe({
        next: (v) => {
          const token = v.token;
          if (token) {
            console.log('Token recibido:', token);
            this._tokenService.setCookie('token', token, 7); // Guarda el token en una cookie por 7 días
          }
          this.loading = false; // Desactiva el estado de carga después de la respuesta
          this.formLogin.reset();
          this.router.navigate(['/login']);
        },
        error: (event: HttpErrorResponse) => {
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

    console.log('Usuario creado:', user);
  }

  

  validatePassword(control: AbstractControl): ValidationErrors | null {
    const password = control.value;
    if (!password) {
      return { required: true }; // Si está vacío, devuelve el error 'required'
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length >= 10;

    if (
      !hasUpperCase ||
      !hasLowerCase ||
      !hasNumber ||
      !hasSpecialChar ||
      !isValidLength
    ) {
      return { passwordInvalid: true }; // Devuelve un error si no cumple con los requisitos
    }

    return null; // Devuelve null si la contraseña es válida
  }

  hasErrors(fieldName: string): boolean {
    const control = this.formLogin.get(fieldName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }
}
