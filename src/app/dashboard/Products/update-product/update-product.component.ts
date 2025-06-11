import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../Services/company.service';
import { Company } from '../../../Interfaces/company';

@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
   form: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private companyService: CompanyService
    ) {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        description: [''],
        address: [''],
        phone: [''],
        email: ['', [Validators.email]],
        website: [''],
        tax_id: [''],
        is_active: [false]
      });
    }
  
    ngOnInit(): void {
      this.companyService.getMyCompany().subscribe({
        next: (res) => {
          const company = res.company || res; // Ajusta según tu estructura
          this.form.patchValue({
            name: company.name,
            description: company.description,
            address: company.address,
            phone: company.phone,
            email: company.email,
            website: company.website,
            tax_id: company.tax_id,
            is_active: company.is_active
          });
        },
        error: (err) => {
          console.error('Error al obtener los datos de la compañía:', err);
        }
      });
    }
  
    onSubmit() {
      if (this.form.valid) {
        const companyData: Company = this.form.value;
  
        this.companyService.updateMyCompany(companyData).subscribe({
          next: (res) => {
            console.log('Compañía actualizada correctamente:', res);
          },
          error: (err) => {
            console.error('Error al actualizar la compañía:', err);
          }
        });
  
      } else {
        console.log('Formulario inválido');
      }
    }
}
