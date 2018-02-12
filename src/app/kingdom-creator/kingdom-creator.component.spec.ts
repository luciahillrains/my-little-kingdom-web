import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomCreatorComponent } from './kingdom-creator.component';

describe('KingdomCreatorComponent', () => {
  let component: KingdomCreatorComponent;
  let fixture: ComponentFixture<KingdomCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingdomCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingdomCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
