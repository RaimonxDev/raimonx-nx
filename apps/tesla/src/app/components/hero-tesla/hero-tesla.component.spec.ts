import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroTeslaComponent } from './hero-tesla.component';

describe('HeroTeslaComponent', () => {
  let component: HeroTeslaComponent;
  let fixture: ComponentFixture<HeroTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTeslaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
