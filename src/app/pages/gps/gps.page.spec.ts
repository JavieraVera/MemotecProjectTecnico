import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GPSPage } from './gps.page';

describe('GPSPage', () => {
  let component: GPSPage;
  let fixture: ComponentFixture<GPSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GPSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GPSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
