import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApigetdataComponent } from './apigetdata.component';

describe('ApigetdataComponent', () => {
  let component: ApigetdataComponent;
  let fixture: ComponentFixture<ApigetdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApigetdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApigetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
