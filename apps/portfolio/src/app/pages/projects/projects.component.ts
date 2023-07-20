import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../shared/card/card.component';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'raimonx-dev-projects',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatMenuModule, CardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export default class ProjectsComponent {

  projects = [
    {
      title: 'tesla clone',
      description: 'Me gustaria compartir una pagina creada en angular. La cual saque del video de midudev donde enseña a hacer un clon de la pagina de Tesla. El reto principal no fue el html ni el css. Sino la funcionalidad de Js pasarla a angular el Famoso 😎 Angular Way. Para eso use las Directivas',
      image: 'assets/images/raimonx-dev.png',
      deployment: {
        url: 'https://raimonx.dev',
        githubUrl: 'https://github.com/RaimonxDev/raimonx-nx/tree/main/apps/tesla/src/app/shared/directives',
        label: 'ver codigo',
      }
    },
    {
      title: 'page mac mini m1',
      description: 'Mi pagina personal donde comparto mis pro',
      image: 'assets/images/raimonx-dev.png',
      deployment: {
        url: 'https://raimonx.dev',
        githubUrl: 'https://github.com/RaimonxDev/raimonx-nx/tree/main/apps/mac-mini',
        label: 'ver codigo',
      }
    },
    {
      title: 'Pesos Blue',
      description: 'Pequeña calculadora de pesos argentinos a pesos chilenos, Calculados con el valor del dolar blue. Utilizando Angular Signals presente en la V16 de angular',
      image: 'assets/images/raimonx-dev.png',
      deployment: {
        url: 'https://pesosblue.cl',
        githubUrl: '',
        label: '',
      }
    },
    {
      title: 'PlazaFrontent',
      description: 'Mi antiguo Blog. Creado con Angular y tailwind css, Ya no es mantenido pero lo dejo como recuerdo de mi primer blog',
      image: 'assets/images/raimonx-dev.png',
      deployment: {
        url: 'https://plazafrontend.ramonmartinez.dev',
        githubUrl: '',
        label: '',
      }
    },
    {
      title: 'Pedidos VYA',
      description: 'Aplicacion que realice para una pequeña de alimentos de mascota. La cual necesitaba un sistema para poder gestionar sus pedidos. Cliente ingresaba su pedido, Luego ingresaba sus datos y se enviaba un correo con el pedido. Realizado con PrimeNG',
      image: 'assets/images/raimonx-dev.png',
      deployment: {
        url: 'https://app-pedidos-vya.vercel.app/home',
        githubUrl: 'https://github.com/RaimonxDev/app-pedidos-VYA',
        label: 'ver codigo',
      }
    },

  ]


}
