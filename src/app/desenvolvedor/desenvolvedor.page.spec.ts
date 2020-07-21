import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesenvolvedorPage } from './desenvolvedor.page';

describe('DesenvolvedorPage', () => {
  let component: DesenvolvedorPage;
  let fixture: ComponentFixture<DesenvolvedorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesenvolvedorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesenvolvedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
