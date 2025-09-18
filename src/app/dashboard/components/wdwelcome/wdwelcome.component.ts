import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../../Services/user.service';
import { CompanyService } from '../../../Services/company.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { User } from '../../../Interfaces/user';


@Component({
  selector: 'app-wdwelcome',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './wdwelcome.component.html',
  styleUrl: './wdwelcome.component.scss',
})
export class WdwelcomeComponent implements OnInit {
  companyForm: FormGroup;
  currentSlide: number = 1;
  activeModal?: boolean// camniar
  userCurrent? : User

ngOnInit(): void {
  this._userService.getUser().subscribe((user: User) => {
    this.userCurrent = user;
    console.log("estado", this.userCurrent?.status);

    this.activeModal = this.userCurrent?.status !== 'active';
  });
}

  

  constructor(
    private form: FormBuilder,
    private _userService: UserService,
    private _companyService: CompanyService,
  ) {
    this.companyForm = this.form.group({
      name: [''],
      description: [''],
      address: [''],
      phone: ['']
    });
  }

  createCompany() {
    try {
      console.log(this.companyForm.value);
      this._companyService
        .addCompany(this.companyForm.value)
        .subscribe((response) => {
          console.log('Empresa creada con exito', response);
        });
    } catch (error) {
      console.log('Error al crear la empresa', error);
    }
  }

  updateStatus() {
    try {
      this._userService
    
        .updateUSer({ status: 'active' } as any)
        .subscribe((response) => {
          console.log('Usuario actualizado con exito', response);
        });
    } catch (error) {
      console.log('Error al actualizar el estado usuario', error);
    }
  }

  nextSlide() {
    if (this.currentSlide < 3) {
      this.currentSlide++;
         console.log(this.currentSlide);
    } 
    if (this.currentSlide === 3) {
      this.activeModal = false;
      this.createCompany();
      this.updateStatus();
    }
  }

}
