import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Carro3Page } from './carro3.page';

describe('Carro3Page', () => {
  let component: Carro3Page;
  let fixture: ComponentFixture<Carro3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carro3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Carro3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
