import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaccionVelozListadoComponent } from './reaccion-veloz-listado.component';

describe('ReaccionVelozListadoComponent', () => {
  let component: ReaccionVelozListadoComponent;
  let fixture: ComponentFixture<ReaccionVelozListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaccionVelozListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaccionVelozListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
