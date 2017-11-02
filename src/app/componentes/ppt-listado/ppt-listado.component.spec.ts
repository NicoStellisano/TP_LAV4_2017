import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PPTListadoComponent } from './ppt-listado.component';

describe('PPTListadoComponent', () => {
  let component: PPTListadoComponent;
  let fixture: ComponentFixture<PPTListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PPTListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PPTListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
