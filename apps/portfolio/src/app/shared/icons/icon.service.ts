import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
  _iconRegistry = inject(MatIconRegistry)
  _domSanitizer = inject(DomSanitizer)

  init() {
    this._iconRegistry.addSvgIcon(
      "home",
      this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/home.svg")
    );
    this._iconRegistry.addSvgIcon(
      "user-circle",
      this._domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/user-circle.svg")
    );
  }

}
