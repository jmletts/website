import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup;

  constructor(private form: FormBuilder) { // Inyectar dependencia del formulario
    this.formLogin = this.form.group({
      username: ['', [Validators.required]], // Cambiar "email" por "username"
      password: ['', [Validators.required]] // Quitar el validador "email" (no aplica aquí)
    });
  }

  onSubmit() {
    console.log(this.formLogin.value);
  }
}
