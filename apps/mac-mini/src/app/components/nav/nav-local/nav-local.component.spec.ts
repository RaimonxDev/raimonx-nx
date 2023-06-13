import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavLocalComponent } from './nav-local.component';

describe('NavLocalComponent', () => {
  let component: NavLocalComponent;
  let fixture: ComponentFixture<NavLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLocalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
