import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionTeslaComponent } from './section-tesla.component';

describe('SectionTeslaComponent', () => {
  let component: SectionTeslaComponent;
  let fixture: ComponentFixture<SectionTeslaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTeslaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionTeslaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
