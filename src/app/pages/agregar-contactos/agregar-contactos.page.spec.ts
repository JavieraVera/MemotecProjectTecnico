import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgregarContactosPage } from './agregar-contactos.page';

describe('AgregarContactosPage', () => {
  let component: AgregarContactosPage;
  let fixture: ComponentFixture<AgregarContactosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarContactosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgregarContactosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
