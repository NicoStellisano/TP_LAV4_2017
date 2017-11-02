import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaccionVelozComponent } from './reaccion-veloz.component';

describe('ReaccionVelozComponent', () => {
  let component: ReaccionVelozComponent;
  let fixture: ComponentFixture<ReaccionVelozComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaccionVelozComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaccionVelozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
