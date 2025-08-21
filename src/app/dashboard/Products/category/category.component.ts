import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../Services/category.service';
import { Category } from '../../../Interfaces/category'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-category',
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {
  form: FormGroup;
  Categories : Category[] = []; 
  forms: FormGroup[] = [];

constructor(private fb: FormBuilder, private _categoryService: CategoryService) {
  this.form = this.fb.group({
    name: ['', [Validators.required]],
    description: [''],
    parent_id: [null],
    is_active: [true],
  });
}

ngOnInit() {
  this._categoryService.getMyCategories().subscribe({
    next: (res) => {
      console.log('Categorías obtenidas:', res);
      try {
        this.Categories = res;
      } catch (error) {
        console.error('Error al asignar categorías:', error);
      } 
    },
    error: (err) => {
      console.error('Error al obtener categorías:', err);
      // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje de error
    }
});
this.addForm();
}

addForm() {
  const form = this.fb.group({
    name: ['', Validators.required],
    description: ['']
  });
  this.forms.push(form);
}

onSubmit(index: number) {
  const form = this.forms[index];
  if (form.valid) {
    this._categoryService.addCategory(form.value).subscribe({
      next: (res) => {
        console.log('Categoría agregada exitosamente:', res);
        this.Categories.push(res);
        console.log(res);
        
      },
      error: (err) => {
        console.error('Error al agregar categoría:', err);
      }
    });
    console.log('Categoría:', form.value);
  }
}

deleteCategory(id: number) {
  this._categoryService.deleteCategory(id).subscribe({
    next: (res) => {
      console.log('Categoría eliminada exitosamente:', res);
      this.Categories = this.Categories.filter(category => category.id !== id);
    },
    error: (err) => {
      console.error('Error al eliminar categoría:', err);
    }
  }); 
}




}

