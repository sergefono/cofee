import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofeeMainComponent } from './cofee-main.component';

describe('CofeeMainComponent', () => {
  let component: CofeeMainComponent;
  let fixture: ComponentFixture<CofeeMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CofeeMainComponent]
    });
    fixture = TestBed.createComponent(CofeeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
