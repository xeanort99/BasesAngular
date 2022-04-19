import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcmascriptComponent } from './ecmascript.component';

describe('EcmascriptComponent', () => {
  let component: EcmascriptComponent;
  let fixture: ComponentFixture<EcmascriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcmascriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcmascriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
