import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../../../Interfaces/user';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup;
  displayError: boolean = false;

  constructor(private form: FormBuilder) { // Inyectar dependencia del formulario
    this.formLogin = this.form.group({
      username: ['', [Validators.required]], // Cambiar "email" por "username"
      password: ['', [Validators.required]] // Quitar el validador "email" (no aplica aquí)
    });
  }

  addUser() {
    console.log(this.formLogin.value);
    if (!this.hasErrors('required')){
      // crear objeto de inetarface
      const user: User = {
        name : this.formLogin.get('username')?.value,
        email : this.formLogin.get('username')?.value,
        password : this.formLogin.get('username')?.value,
        lastName : this.formLogin.get('username')?.value,
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

