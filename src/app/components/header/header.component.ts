import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showProyect: boolean = false;
  showServs: boolean = false;


  //funciones de navegación

  listaProyectos : Content[] = [
    {
      name: 'OnePay 0.8',
      code : 'Java',
      state : 'Descontinuado',
      description: 'Autoservicio de pagos usando billeteras digitales local',
    },
    {
      name: 'Onepay beta',
      code : 'TypeScript',
      state : 'En desarrollo',
      description: 'Autoservicio de pagos usando billeteras digitales en la nube',
    },
    {
      name: 'Onepay beta',
      code : 'TypeScript',
      state : 'En desarrollo',
      description: 'Autoservicio de pagos usando billeteras digitales en la nube',
    }
  ];

  listaServes : Content[] = [
    {
      name: 'Servicios 1',
      description: 'Descripción del proyecto 1',
    },
    {
      name: 'Servicios 2',
      description: 'Descripción del proyecto 2',
    },
    {
      name: 'Servicios 3',
      description: 'Descripción del proyecto 3',
    },
  ];
 





  // funciones de apariencia
  setVisibility(
    open: 'showProyect' | 'showServs',
    close: 'showProyect' | 'showServs',
    estado?: boolean
  ) {
    this[close] = false;
    this[open] = estado !== undefined ? estado : true;
  }

  rotateImage(id: string, deg: number) {
    const link = document.getElementById(id);
    const img = link?.querySelector('img');

    if (img) {
      img.style.transform = `rotate(${deg}deg)`;
    }
  }

  resetImageRotation(id: string) {
    const link = document.getElementById(id);
    const img = link?.querySelector('img');

    if (img) {
      img.style.transform = `rotate(0deg)`;
    }
  }
}

interface Content {
  name: string;
  code ? : string;
  state ? : string;
  description: string;
}