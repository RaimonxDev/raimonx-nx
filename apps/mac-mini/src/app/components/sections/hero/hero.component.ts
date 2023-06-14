import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'mac-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate('0.7s ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.7s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
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
  imagenAnterior!: string;
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
        this.imagenAnterior = this.imagenActual;
        this.imagenActual = this.images[this.contador].src;
      }
    }, 1000); // Cambiamos la imagen cada 2 segundos Cambiamos la imagen cada 2 segundos
  }

}
