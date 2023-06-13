import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VersatilityComponent } from './versatility.component';

describe('VersatilityComponent', () => {
  let component: VersatilityComponent;
  let fixture: ComponentFixture<VersatilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersatilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VersatilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
