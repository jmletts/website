import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../../Services/product.service';
@Component({
  selector: 'app-category',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  form: FormGroup;

constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    parent_id: [null],
    is_active: [true],
  });


}

onSubmit() {
  if (this.form.valid) {
    const categoryData = this.form.value;
    // Call the service to save the category
    // this.productService.createCategory(categoryData).subscribe(response => {
    //   console.log('Category created successfully', response);
    // });
  } else {
    console.log('Form is invalid');
  }}
}
