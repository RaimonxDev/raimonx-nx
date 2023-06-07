import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderTeslaComponent } from './header-tesla.component';

describe('HeaderTeslaComponent', () => {
  let component: HeaderTeslaComponent;
  let fixture: ComponentFixture<HeaderTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTeslaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
