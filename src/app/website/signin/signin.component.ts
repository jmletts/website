import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../Interfaces/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [ReactiveFormsModule,CommonModule, RouterLink],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
    formLogin: FormGroup;
    displayError: boolean = false;
  
    constructor(private form: FormBuilder) { // Inyectar dependencia del formulario
      this.formLogin = this.form.group({
        name: ['', [Validators.required]], // Cambiar "email" por "username"
        email: ['', [Validators.email]], // Quitar el validador "email" (no aplica aquí)
        password: ['', [Validators.required]], // Quitar el validador "email" (no aplica aquí)
        lastName: ['', [Validators.required]], // Quitar el validador "email" (no aplica aquí)
        Credential: ['', [Validators.required]] ,// Quitar el validador "email" (no aplica aquí)
      });
    }
  
    addUser() {
      console.log(this.formLogin.value);
      if (!this.hasErrors('required')){
        // crear objeto de inetarface
        const user : User = {
          name : this.formLogin.get('name')?.value,
          email : this.formLogin.get('email')?.value,
          password : this.formLogin.get('password')?.value,
          lastName : this.formLogin.get('lastName')?.value,
          credential : this.formLogin.get('Credential')?.value,
        }
  
      }
    }
              //email   required
    hasErrors(errorTyoe : string)  {
      if (this.formLogin.controls['username'].hasError(errorTyoe) || this.formLogin.controls['password'].hasError(errorTyoe)) {
        this.formLogin?.setValue({
          username: '',
          password: ''
        });
        this.displayError = true;
        return false;
      }
      return true; 
    }
  }
  
  

