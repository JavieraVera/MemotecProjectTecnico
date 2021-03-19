import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionAgregadaUsuarioPage } from './informacion-agregada-usuario.page';

describe('InformacionAgregadaUsuarioPage', () => {
  let component: InformacionAgregadaUsuarioPage;
  let fixture: ComponentFixture<InformacionAgregadaUsuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionAgregadaUsuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionAgregadaUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
