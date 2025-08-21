import { CommonModule } from '@angular/common';
import { Component, Input,  OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyService } from '../../../Services/company.service';
import { Company } from '../../../Interfaces/company';
import { Product } from '../../../Interfaces/product';
import { ProductService } from '../../../Services/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import EventEmitter from 'node:events';


@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit {
  @Input() product! : Product // btine el prdiocto de  display produycts
    isClosing = false;
    form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService
  ) {
    this.form = this.fb.group({
      id: [null],
      name: ['', [Validators.required]],
      description: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      cost_price: [0],
      sku: [''],
      stock: [0],
      min_stock: [0],
      brand: [''],
      weight: [0],
      dimensions: [''],
      is_active: [true]
    });
  }

  ngOnInit(): void {
    console.log('Producto recibido:', this.product);
    this.form.patchValue({
      id: this.product.id,
      name: this.product.name,
      description: this.product.description,
      price: this.product.price,
      cost_price: this.product.cost_price,
      sku: this.product.sku,
      stock: this.product.stock,
      min_stock: this.product.min_stock,
      brand: this.product.brand,
      weight: this.product.weight,
      dimensions: this.product.dimensions,
      is_active: this.product.is_active
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const updatedProduct: Product = this.form.getRawValue();

      this.productService.updateProduct(updatedProduct).subscribe({
        next: (res: any) => {
          console.log('Producto actualizado correctamente:', res);
        },
        error: (err : any) => {
          console.error('Error al actualizar el producto:', err);
          console.log(updatedProduct)
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }


}


