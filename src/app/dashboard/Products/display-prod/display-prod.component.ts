import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../Services/product.service';
import { Product } from '../../../Interfaces/product';

@Component({
  selector: 'app-display-prod',
  imports: [CommonModule],
  templateUrl: './display-prod.component.html',
  styleUrl: './display-prod.component.scss'
})
export class DisplayProdComponent implements OnInit{
 
  products: Product[] = [];

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
}

