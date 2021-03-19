import { Component, OnInit } from '@angular/core';
import { Contacto } from '../Interfaces/interfaces';
import {ContactoService} from '../../service/contacto.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-contactos',
  templateUrl: './agregar-contactos.page.html',
  styleUrls: ['./agregar-contactos.page.scss'],
})
export class AgregarContactosPage implements OnInit {
contacto: Contacto = {
  nombre : '',
  telefono: '',
  id: ''
};
  constructor(public router: Router,private contactoService: ContactoService,public alertController: AlertController) { }

  ngOnInit() {
    this.contactoService.getContacto();
  }

  agregarContacto(){
    this.contactoService.crearContacto(this.contacto);
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Registro',
      subHeader: 'Registro exitoso!',
      buttons: [{
        text : 'OK',
        handler: () => {
          this.router.navigate(['/sesioncompletiniciada']);
        }
      }],
    });

    await alert.present();
  }
}
