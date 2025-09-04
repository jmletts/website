import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']   
})
export class HomeComponent implements AfterViewInit {
  private sections!: NodeListOf<HTMLElement>;
  private currentIndex = 0;
  private isScrolling = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.sections = this.el.nativeElement.querySelectorAll('.section');

    const fullpage = this.el.nativeElement.querySelector('#fullpage');
    fullpage.addEventListener('wheel', (e: WheelEvent) => this.onScroll(e), { passive: false });
  }

  private onScroll(event: WheelEvent) {
    event.preventDefault();

    if (this.isScrolling) return;

    if (event.deltaY > 0 && this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
      this.scrollToSection();
    } else if (event.deltaY < 0 && this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToSection();
    }
  }

  private scrollToSection() {
    this.isScrolling = true;
    this.sections[this.currentIndex].scrollIntoView({ behavior: 'smooth' });

    // 🔹 Ajusta duración para que el scroll sea más suave
    setTimeout(() => {
      this.isScrolling = false;
    }, 800); // 0.8 segundos
  }
}
