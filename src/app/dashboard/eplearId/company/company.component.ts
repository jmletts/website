
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-company',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss'
})
export class CompanyComponent {

  form: FormGroup;
  
    constructor(private fb: FormBuilder, private productService: ProductService) {
      this.form = this.fb.group({
        name: ['', [Validators.required]],
        description: [''],
        price: [0, [Validators.required, Validators.min(0)]],
        cost_price: [0, [Validators.required, Validators.min(0)]],
        sku: ['', [Validators.required]],
        stock: [0, [Validators.required, Validators.min(0)]],
        min_stock: [0, [Validators.required, Validators.min(0)]],
        brand: [''],
        weight: [0, [Validators.required, Validators.min(0)]],
        dimensions: ['', [Validators.required]],
        is_active: [true, [Validators.required]],
      });
    }
  
  
    onSubmit() {
      if (this.form.valid) {
        console.log('Form Submitted', this.form.value);
        const productData = {
          name: this.form.get('name')?.value,
          description: this.form.get('description')?.value,
          price: this.form.get('price')?.value,
          cost_price: this.form.get('cost_price')?.value,
          sku: this.form.get('sku')?.value,
          stock: this.form.get('stock')?.value,
          min_stock: this.form.get('min_stock')?.value,
          brand: this.form.get('brand')?.value,
          weight: this.form.get('weight')?.value,
          dimensions: this.form.get('dimensions')?.value,
          is_active: this.form.get('is_active')?.value,
        };
        
        this.productService.addProduct(productData).subscribe({
          next: (response) => {
            console.log('Product added successfully', response);
            this.form.reset(); // Reset the form after successful submission
          },
          error: (error) => {
            console.error('Error adding product', error);
          },
        });
  
      } else {
        console.log('Form is invalid');
      }
  
    }
}
