import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../Interfaces/interfaces';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
})
export class CrearcuentaPage implements OnInit {
  usuario: Usuario= {
    nombre : '',
    apellido : '',
    correo: '',
    nombreUs: '',
    password: ''
 };
  Registro= {
    nombR: '',
    apellIs: '',
    nomUs: '',
    correOe: '',
    password: ''
  };
  form= new FormControl('');
  nombre:string;
  apellido:string;
  nombreusuario:string;
  correoelectronico:string;
  contrasena:string;
  constructor(public router: Router,
              private usuarioService: UsuarioService,
              public alertController: AlertController) { }

  ngOnInit() {
  }
  logForm(){
    console.log("funciona");
    console.log(this.nombre);
    console.log(this.apellido);
    console.log(this.nombreusuario);
    console.log(this.correoelectronico);
    console.log(this.contrasena);

    // tslint:disable-next-line: max-line-length
    if(this.nombre === undefined || this.apellido === undefined|| this.nombreusuario === undefined || this.correoelectronico === undefined|| this.contrasena === undefined ){
      console.log("Campos Vacios");
    }else{
      this.router.navigateByUrl('/iniciosesion');
    }
  }

  crearUsuario(){
    this.usuarioService.crearUsuario(this.usuario);
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
          this.router.navigate(['/iniciosesion']);
        }
      }],
      
    });

    await alert.present();
  }
}
