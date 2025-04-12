import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../Interfaces/user';
import { RouterLink } from '@angular/router';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../components/loader/loader.component';
import { HttpErrorResponse } from '@angular/common/http';
import { log } from 'console';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule,CommonModule, RouterLink, LoaderComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
    formLogin: FormGroup;
    loading = false;
  
    constructor(
      private form: FormBuilder,
      private _userService : UserService,
      private router : Router
    ) { 
      this.formLogin = this.form.group({
        name: ['', [Validators.required]], // Cambiar "email" por "username"
        email: ['', [Validators.email]], // Quitar el validador "email" (no aplica aquí)
        password: ['', [Validators.required]], // Quitar el validador "email" (no aplica aquí)
        lastName: ['', [Validators.required]], // Quitar el validador "email" (no aplica aquí)
        terms : [false, [Validators.requiredTrue]] // Quitar el validador "email" (no aplica aquí)
      });
      
    }
  
    addUser() {
      this.formLogin.markAllAsTouched(); // Marca todos los campos como "tocados"
      if (this.formLogin.invalid && !this.validatePassword()) {
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
        this._userService.signIn(user).subscribe(
          data => {
            this.loading = false; // Desactiva el estado de carga después de la respuesta
            this.formLogin.reset();
            this.router.navigate(['/login']);
          },
          (event: HttpErrorResponse) => {
            this.loading = false; // Desactiva el estado de carga en caso de error
            if (event.error.msg) {
              console.log(event.error.msg);
            } else {
              console.error('Hay un error en el servidor');
            }
          }
        );
      }, 2000); 



    
      console.log('Usuario creado:', user);
    }

    validatePassword() {
      const password = this.formLogin.get('password')?.value;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      const isValidLength = password.length >= 10;

      if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar || !isValidLength) {
        console.log("contrasena falta")
        return false;
        
      }
      console.log("contrasena completa")
      return false;
    }
  
  }
  
  

