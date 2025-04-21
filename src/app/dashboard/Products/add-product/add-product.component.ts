import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required, Validators.min(0)]],
      description: [''],
      stock: [0, [Validators.required, Validators.min(0)]],
      category : ['', [Validators.required]],
      image: [''],
      sku : ['', [Validators.required]],
      brand: [''],
      discount: [0],
      status: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted', this.form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
