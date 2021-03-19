import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IniciosesionPage } from './iniciosesion.page';

describe('IniciosesionPage', () => {
  let component: IniciosesionPage;
  let fixture: ComponentFixture<IniciosesionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciosesionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IniciosesionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
