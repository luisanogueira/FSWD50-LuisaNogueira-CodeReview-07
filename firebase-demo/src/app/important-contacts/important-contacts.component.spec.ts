import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportantContactsComponent } from './important-contacts.component';

describe('ImportantContactsComponent', () => {
  let component: ImportantContactsComponent;
  let fixture: ComponentFixture<ImportantContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportantContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportantContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
