import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProductsPageComponent } from './user-products-page.component';

describe('UserProductsPageComponent', () => {
  let component: UserProductsPageComponent;
  let fixture: ComponentFixture<UserProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserProductsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
