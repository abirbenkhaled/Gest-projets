import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetListCardsComponent } from './projet-list-cards.component';

describe('ProjetListCardsComponent', () => {
  let component: ProjetListCardsComponent;
  let fixture: ComponentFixture<ProjetListCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetListCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetListCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
