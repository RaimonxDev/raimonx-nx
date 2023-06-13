import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mac-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {

  images = [
    {
      src: 'assets/hero/hero_1_large.jpg',
      alt: 'hero-1',
      title: 'hero-1'
    },
    {

      src: 'assets/hero/hero_2_large.jpg',
      alt: 'hero-2',
      title: 'hero-2'
    },
    {
      src: 'assets/hero/hero_static_large.jpg',
      alt: 'static hero',
      title: 'static hero'
    }
  ];

  imagenActual!: string;
  contador = 0;

  ngOnInit() {
    this.imagenActual = this.images[this.contador].src;
    this.iniciarAnimacion();
  }

  iniciarAnimacion() {
    const intervalId = setInterval(() => {
      this.contador++;
      if (this.contador >= this.images.length) {
        clearInterval(intervalId); // Detenemos la animación después de la última imagen
      } else {
        this.imagenActual = this.images[this.contador].src;
      }
    }, 2000); // Cambiamos la imagen cada 2 segundos
  }

}
