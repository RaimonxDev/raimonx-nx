import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';


interface Theme {
  [key: string]: {
    [key: string]: {
      [key: string]: string;
    };
  };
}
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, CommonModule, MatButtonModule],
  selector: 'raimonx-dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolio';

  userTheme: any = {}


  theme: Theme = {
    default_theme: {
      primary: {
        50: '#eef2ff',
        100: '#e0e7ff',
        200: '#c7d2fe',
        DEFAULT: '#a5b4fc',
      },
      accent: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        DEFAULT: '#cbd5e1',
      },
    },
    alter: {
      primary: {
        50: '#fef2f2',
        100: '#fee2e2',
        200: '#fecaca',
        DEFAULT: '#fca5a5',
      },
      accent: {
        50: '#74b0f5',
        100: '#e2ecfd',
        200: '#7f1d1d',
        DEFAULT: '#1d4ed8',
      },
    },
  };







}
