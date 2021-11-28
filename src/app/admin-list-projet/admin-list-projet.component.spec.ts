import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListProjetComponent } from './admin-list-projet.component';

describe('AdminListProjetComponent', () => {
  let component: AdminListProjetComponent;
  let fixture: ComponentFixture<AdminListProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListProjetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
