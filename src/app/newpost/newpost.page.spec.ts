import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewpostPage } from './newpost.page';

describe('NewpostPage', () => {
  let component: NewpostPage;
  let fixture: ComponentFixture<NewpostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewpostPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewpostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
