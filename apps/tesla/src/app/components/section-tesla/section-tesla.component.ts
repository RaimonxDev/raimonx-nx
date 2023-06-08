import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Media {
  url: string;
  type: 'img' | 'video';
}

@Component({
  selector: 'raimonx-dev-section-tesla',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-tesla.component.html',
  styleUrls: ['./section-tesla.component.css'],
})
export class SectionTeslaComponent {
  @Input({ required: true }) media: Media = {} as Media;
}
