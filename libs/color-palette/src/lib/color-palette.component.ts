/* eslint-disable @typescript-eslint/no-explicit-any */
import { AfterViewInit, Component, ElementRef, forwardRef, Input, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatInputModule } from '@angular/material/input';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, Validators } from '@angular/forms';
import * as colorsTW from 'tailwindcss/colors';
import { Subject, takeUntil } from 'rxjs';


export type Colors = 'sky' | 'gray' | 'pink' | 'green' | 'orange' | 'purple' | 'teal' | 'cyan' | 'lime' | 'amber' | 'red' | 'white' | 'black';

export interface PaletteColor {
  color: Colors;
  values: any
}


@Component({
  selector: 'raimonx-dev-color-palette',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatIconModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css'],
  exportAs: 'colorPalette',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPaletteComponent),
      multi: true
    }
  ]
})
export class ColorPaletteComponent implements OnInit, AfterViewInit, OnDestroy, ControlValueAccessor {

  @ViewChild('paletteOrigin', { read: ElementRef }) PaletteOrigin: ElementRef | undefined;
  @ViewChild('paletteColorsPanel') paletteColorsPanel!: TemplateRef<any>;

  @Input() activeHistory = true;
  @Input() maxHistory = 10;
  @Input() activeCustoms = true;

  onChangeCb?: (color: string) => void;
  onTouchCb?: () => void;

  _paletteColors: PaletteColor[] = []
  customsColors: string[] = [];
  historyColors: string[] = [];
  colorSelected = '';
  isDisabled = false;

  private _overlayRef?: OverlayRef;
  private unsubscribe$ = new Subject<void>();

  inputColorCtrl = new FormControl('', [Validators.pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)]);

  addNewColorCtrl = new FormControl('', [Validators.pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)]);

  constructor(private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef,
  ) { }

  get inputColorValue(): string {
    return this.inputColorCtrl.value || '';
  }

  writeValue(color: string): void {
    this.inputColorCtrl.setValue(color.toLowerCase(), { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.inputColorCtrl.valueChanges.pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe(fn)
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit(): void {
    if (!this.activeCustoms) {
      this.inputColorCtrl.disable();
    }
    this._paletteColors = this.generatePaletteColors();

    this.inputColorCtrl.valueChanges.subscribe(console.log)
  }

  ngAfterViewInit(): void {
    if (!this.findColor(this.inputColorValue) && this.inputColorValue !== '') {
      this.customsColors = [...this.customsColors, this.inputColorValue];
    }

    this.inputColorCtrl.valueChanges.pipe(
      takeUntil(this.unsubscribe$),
    ).subscribe({
      next: (color: string | null) => {
        if (!color) return;

        if (!this.findColor(color) && color !== '' && this.inputColorCtrl.valid) {
          if (!this.customsColors.includes(color.toLowerCase())) {
            this.customsColors = [...this.customsColors, color.toLowerCase()];
          }
        }
      },
      error: (err) => console.log(err),
    })
  }

  openPalette(): void {
    // Create the overlay if it doesn't exist
    if (!this._overlayRef) {
      this._createOverlay();
    }
    if (this._overlayRef?.hasAttached()) {
      this._overlayRef.detach();
    }
    // Attach the portal to the overlay
    this._overlayRef?.attach(new TemplatePortal(this.paletteColorsPanel, this._viewContainerRef));
  }

  selectedColor(color: string): void {
    // this.colorSelected = color;
    this.inputColorCtrl.setValue(color.toLowerCase());
    if (this.activeHistory) {
      this.addToHistory(color.toLowerCase());
    }
    this.onChangeCb?.(color.toLowerCase());
  }

  addNewColor(): void {
    this.selectedColor(this.addNewColorCtrl.value || '');
    this.addNewColorCtrl.reset();
  }


  generatePaletteColors(): PaletteColor[] {
    const selectedColors: Colors[] = [
      'cyan',
      'green',
      'lime',
      'amber',
      'orange',
      'pink',
      'purple',
      'red',
      'gray',
      'sky',
      'teal',
      'white',
      'black'
    ]
    return selectedColors.map((color: Colors) => {

      if (color === 'white' || color === 'black') {
        return {
          color: color,
          values: [colorsTW[color]]
        }
      }
      const valuesC = Object.entries(colorsTW[color]).map(([_, value]) => {
        return value
      });
      return {
        color: color,
        values: valuesC
      }
    });
  }

  findColor(color: string): string | undefined {
    const colorFound = this._paletteColors.find((paletteColor: PaletteColor) => {
      return paletteColor.values.includes(color.toLowerCase());
    })?.values.find((value: string) => value.toLowerCase() === color.toLowerCase())
    return colorFound
  }

  addToHistory(color: string): void {
    if (!this.historyColors.includes(color.toLowerCase())
      && color !== ''
      && !this.customsColors.includes(color.toLowerCase()
      )) {
      this.historyColors = [color.toLowerCase(), ...this.historyColors];
      // max length 10
      if (this.historyColors.length > this.maxHistory) {
        this.historyColors = this.historyColors.slice(0, -1);
      }
    }
  }



  private _createOverlay(): void {
    // Create the overlay
    this._overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: 'fuse-backdrop-on-mobile',
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position()
        .flexibleConnectedTo(this.PaletteOrigin?.nativeElement)
        .withLockedPosition(true)
        .withPush(true)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          },
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          },
          {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          },
          {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
          }
        ])
    });

    // Detach the overlay from the portal on backdrop click
    this._overlayRef.backdropClick().subscribe(() => {
      this._overlayRef?.detach();
    });
  }

  ngOnDestroy(): void {
    if (this._overlayRef) {
      this._overlayRef.dispose();
    }
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.customsColors = [];
  }


}
