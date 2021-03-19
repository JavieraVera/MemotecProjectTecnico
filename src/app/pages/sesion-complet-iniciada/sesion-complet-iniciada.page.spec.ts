import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SesionCompletIniciadaPage } from './sesion-complet-iniciada.page';

describe('SesionCompletIniciadaPage', () => {
  let component: SesionCompletIniciadaPage;
  let fixture: ComponentFixture<SesionCompletIniciadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SesionCompletIniciadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SesionCompletIniciadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
