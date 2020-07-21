import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Carro1Page } from './carro1.page';

describe('Carro1Page', () => {
  let component: Carro1Page;
  let fixture: ComponentFixture<Carro1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carro1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Carro1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
