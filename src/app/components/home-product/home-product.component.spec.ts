import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductComponent } from './home-product.component';

describe('TopComponent', () => {
  let component: HomeProductComponent;
  let fixture: ComponentFixture<HomeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
