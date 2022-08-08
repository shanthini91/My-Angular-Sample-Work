import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletelogsComponent } from './deletelogs.component';

describe('DeletelogsComponent', () => {
  let component: DeletelogsComponent;
  let fixture: ComponentFixture<DeletelogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletelogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
