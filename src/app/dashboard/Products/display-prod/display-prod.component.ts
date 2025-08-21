import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../Services/product.service';
import { Product } from '../../../Interfaces/product';
import { UpdateProductComponent } from '../update-product/update-product.component';
import { AddProductComponent } from "../add-product/add-product.component";

@Component({
  selector: 'app-display-prod',
  imports: [CommonModule, UpdateProductComponent, UpdateProductComponent],
  templateUrl: './display-prod.component.html',
  styleUrl: './display-prod.component.scss'
})
export class DisplayProdComponent implements OnInit{
 
  products: Product[] = [];
  showUpdateProductModal = false;
  productSelected! : Product ;

  constructor(private productService: ProductService) { }

   ngOnInit(): void {
    this.productService.getMyProducts().subscribe({
      next: (response) => {
        this.products = response.products;
        console.log('Productos cargados:', this.products);
      },
      error: (error) => {
        console.error('Error al obtener productos:', error);
      }
    })
  }

  openUpdateProductModal(product: Product): void {
    this.productSelected = product;
    console.log('Producto seleccionado para actualizar:', this.productSelected);
    this.showUpdateProductModal = true;
  }       

}

