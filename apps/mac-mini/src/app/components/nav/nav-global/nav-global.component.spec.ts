import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavGlobalComponent } from './nav-global.component';

describe('NavGlobalComponent', () => {
  let component: NavGlobalComponent;
  let fixture: ComponentFixture<NavGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavGlobalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
