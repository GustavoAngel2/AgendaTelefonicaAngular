import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertContactoComponent } from './insert-contacto.component';

describe('IncertContactoComponent', () => {
  let component: InsertContactoComponent;
  let fixture: ComponentFixture<InsertContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertContactoComponent]
    });
    fixture = TestBed.createComponent(InsertContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
