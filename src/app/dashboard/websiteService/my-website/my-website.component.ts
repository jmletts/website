import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../../Services/product.service';
import { WebsiteService } from '../../../Services/website.service';
import { Website } from '../../../Interfaces/website';

@Component({
  selector: 'app-my-website',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './my-website.component.html',
  styleUrl: './my-website.component.scss',
})
export class ConfigWebComponent implements OnInit {
  website?: Website;
  subdomain?: string;
  domain?: string;
  theme?: string;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private _websiteService: WebsiteService
  ) {
    this.form = this.fb.group({
      subdomain: ['', [Validators.required]],
      domain: [''],
      theme: [''],
    });
  }

  ngOnInit(): void {
    this._websiteService.getMyWebsite().subscribe({
      next: (res) => {
        console.log('Respuesta completa del backend:', res);

        // Extraemos websiteService del objeto recibido
        if (res && res.websiteService) {
          this.website = res.websiteService;

          if (this.website) {
            this.subdomain = this.website.subdomain;
            this.domain = this.website.domain;
            this.theme = this.website.theme;
          }

          this.form.patchValue({
            subdomain: this.subdomain,
            domain: this.domain,
            theme: this.theme,
          });
        }
      },
      error: (err) => {
        console.error('Error al obtener configuración:', err);
      },
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const configData = this.form.value;
      console.log('Configuración enviada:', configData);

      this._websiteService.createWebsite(configData).subscribe({
        next: (res) => {
          console.log('Configuración guardada correctamente:', res);
          this.form.reset();
        },
        error: (err) => {
          console.error('Error al guardar configuración:', err);
        },
      });
    } else {
      console.log('Formulario inválido');
    }
  }
}
