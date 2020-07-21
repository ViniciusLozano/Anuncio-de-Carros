import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Carro2Page } from './carro2.page';

describe('Carro2Page', () => {
  let component: Carro2Page;
  let fixture: ComponentFixture<Carro2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carro2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Carro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
