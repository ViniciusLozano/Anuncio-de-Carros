import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Carro0Page } from './carro0.page';

describe('Carro0Page', () => {
  let component: Carro0Page;
  let fixture: ComponentFixture<Carro0Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carro0Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Carro0Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
