import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateContactoComponent } from './update-contacto.component';

describe('UpdateContactoComponent', () => {
  let component: UpdateContactoComponent;
  let fixture: ComponentFixture<UpdateContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateContactoComponent]
    });
    fixture = TestBed.createComponent(UpdateContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
