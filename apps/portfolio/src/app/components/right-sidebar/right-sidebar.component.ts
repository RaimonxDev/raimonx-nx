import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'raimonx-dev-right-sidebar',
  standalone: true,
  imports: [CommonModule, ClipboardModule, MatIconModule, MatTooltipModule],
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.css'],
})
export class RightSidebarComponent {
  toastService: HotToastService = inject(HotToastService)


  copyToClipboard() {
    this.toastService.success('Copied to clipboard')
  }
}
