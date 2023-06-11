import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagasinerComponent } from './magasiner.component';

describe('MagasinerComponent', () => {
  let component: MagasinerComponent;
  let fixture: ComponentFixture<MagasinerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagasinerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagasinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
