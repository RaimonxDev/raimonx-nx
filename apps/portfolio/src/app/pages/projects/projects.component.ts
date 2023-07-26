import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../shared/card/card.component';
import { MatMenuModule } from '@angular/material/menu';
import { NgClass, NgFor, NgIf, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'raimonx-dev-projects',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, TitleCasePipe, RouterLink, MatButtonModule, MatMenuModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export default class ProjectsComponent {

  projects = [
    {
      title: 'tesla clone',
      description: 'Me gustaria compartir una pagina creada en angular. La cual saque del video de midudev donde enseña a hacer un clon de la pagina de Tesla. El reto principal no fue el html ni el css. Sino la funcionalidad de Js pasarla a angular el Famoso 😎 Angular Way. Para eso use las Directivas',
      image: 'assets/images/raimonx-dev.png',
      tags: ['angular', 'directivas', 'css', 'html'],
      deployment: {
        url: 'https://app-tesla.ramonmartinez.dev/',
        githubUrl: 'https://github.com/RaimonxDev/raimonx-nx/tree/main/apps/tesla/src/app/shared/directives',
      }
    },
    {
      title: 'page mac mini m1',
      description: 'Clone de pagina de Apple Mac mini m1. Realizado con Angular y tailwind css. El reto principal fue el diseño. Ya que no soy diseñador. Pero me gusto el resultado final. ',
      image: 'assets/images/raimonx-dev.png',
      tags: ['angular', 'css', 'html', 'tailwind'],
      deployment: {
        url: 'https://raimonx.dev',
        githubUrl: 'https://github.com/RaimonxDev/raimonx-nx/tree/main/apps/mac-mini',
      }
    },
    {
      title: 'Pesos Blue',
      description: 'Pequeña calculadora de pesos argentinos a pesos chilenos, Calculados con el valor del dolar blue. Utilizando Angular Signals presente en la V16 de angular',
      image: 'assets/images/raimonx-dev.png',
      tags: ['angular', 'signals', 'state', 'css', 'html'],
      deployment: {
        url: 'https://pesosblue.cl',
        githubUrl: '',
      }
    },
    {
      title: 'Plaza Frontend',
      description: 'Mi antiguo Blog. Creado con Angular y tailwind css, Ya no es mantenido pero lo dejo como recuerdo de mi primer blog',
      image: 'assets/images/raimonx-dev.png',
      tags: ['angular', 'blog', 'css', 'html'],
      deployment: {
        url: 'https://plazafrontend.ramonmartinez.dev',
        githubUrl: '',
      }
    },
    {
      title: 'Pedidos VYA',
      description: 'Aplicacion que realice para una pequeña de alimentos de mascota. La cual necesitaba un sistema para poder gestionar sus pedidos. Cliente ingresaba su pedido, Luego ingresaba sus datos y se enviaba un correo con el pedido. Realizado con PrimeNG',
      image: 'assets/images/raimonx-dev.png',
      tags: ['angular', 'directivas', 'css', 'html', 'primeng'],
      deployment: {
        url: 'https://app-pedidos-vya.vercel.app/home',
        githubUrl: 'https://github.com/RaimonxDev/app-pedidos-VYA',
      }
    },

  ]


}
