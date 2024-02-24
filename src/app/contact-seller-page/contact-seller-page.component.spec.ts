import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSellerPageComponent } from './contact-seller-page.component';

describe('ContactSellerPageComponent', () => {
  let component: ContactSellerPageComponent;
  let fixture: ComponentFixture<ContactSellerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSellerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactSellerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
