import { Injectable, inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class IconRegistryService {
  _iconRegistry = inject(MatIconRegistry)
  _domSanitizer = inject(DomSanitizer)
  private _icons = [
    { name: "home", path: "assets/icons/home.svg" },
    { name: "user-circle", path: "assets/icons/user-circle.svg" },
    { name: "clipboard", path: "assets/icons/clipboard.svg" },
    { name: "at-symbol", path: "assets/icons/at-symbol.svg" },
    { name: "language", path: "assets/icons/language.svg" },
    { name: "map-pin", path: "assets/icons/map-pin.svg" },
    { name: "github", path: "assets/icons/github.svg" },
    { name: "newspaper", path: "assets/icons/newspaper.svg" },
    { name: "code-bracket-square", path: "assets/icons/code-bracket-square.svg" },
  ];




  init() {
    this._icons.forEach((icon) => {
      this._iconRegistry.addSvgIcon(
        icon.name,
        this._domSanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }

}
