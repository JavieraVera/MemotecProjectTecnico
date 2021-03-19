import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestioncontactosPage } from './gestioncontactos.page';

describe('GestioncontactosPage', () => {
  let component: GestioncontactosPage;
  let fixture: ComponentFixture<GestioncontactosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncontactosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestioncontactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
