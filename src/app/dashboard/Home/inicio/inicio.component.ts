import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { AuthService } from '../../../Services/auth.service';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
})
export class InicioComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.userName = this._authService.getUserName();
  }

  userName: string | null = null;
}
