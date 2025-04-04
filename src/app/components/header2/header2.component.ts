import { animation } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header2',
  imports: [CommonModule],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.scss'
})
export class Header2Component {
  openTab : boolean = false;
  tabMode : string = 'proyectos';

  constructor(private elementRef : ElementRef) {}

  @HostListener('document:click', ['$event'])
  onclickoutside(event: MouseEvent) {
    if (this.openTab && !this.elementRef.nativeElement.contains(event.target)) {
      this.openTab = false;
      this.arrowAnimation('Out', this.tabMode);
    }
  }

  arrowState: { [key: string]: string } = {
    proyectos: 'rotateOut', 
    services: 'rotateOut',  
  };

  arrowAnimation(mode: string, tab: string) {
    Object.keys(this.arrowState).forEach(key => {
      this.arrowState[key] = 'rotateOut';
    });

    if (mode === 'In') {
      this.arrowState[tab] = 'rotateIn';
    }
  }

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
    },
    {
      name: 'Onepay beta',
      code : 'TypeScript',
      state : 'En desarrollo',
      description: 'Autoservicio de pagos usando billeteras digitales en la nube',
    },
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
}

interface Content {
  name: string;
  code ? : string;
  state ? : string;
  description: string;
}