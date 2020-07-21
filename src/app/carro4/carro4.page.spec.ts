import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Carro4Page } from './carro4.page';

describe('Carro4Page', () => {
  let component: Carro4Page;
  let fixture: ComponentFixture<Carro4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carro4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Carro4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
