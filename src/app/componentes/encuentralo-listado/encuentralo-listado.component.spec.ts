import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuentraloListadoComponent } from './encuentralo-listado.component';

describe('EncuentraloListadoComponent', () => {
  let component: EncuentraloListadoComponent;
  let fixture: ComponentFixture<EncuentraloListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuentraloListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuentraloListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
