import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InformacionusuarioPage } from './informacionusuario.page';

describe('InformacionusuarioPage', () => {
  let component: InformacionusuarioPage;
  let fixture: ComponentFixture<InformacionusuarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacionusuarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionusuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
