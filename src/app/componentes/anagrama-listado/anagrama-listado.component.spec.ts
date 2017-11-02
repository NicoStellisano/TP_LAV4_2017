import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramaListadoComponent } from './anagrama-listado.component';

describe('AnagramaListadoComponent', () => {
  let component: AnagramaListadoComponent;
  let fixture: ComponentFixture<AnagramaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagramaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagramaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
