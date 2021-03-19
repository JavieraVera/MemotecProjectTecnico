import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Usuario} from '../pages/Interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 usuario: Usuario = {
    nombre : '',
    apellido : '',
    correo: '',
    nombreUs: '',
    password: ''
 };
  constructor(private storage: Storage) { }

  crearUsuario(us?: Usuario){
    this.storage.set('usuario', us);
  }

 async validarUs(nomUs: string, pass: string){
    // await this.storage.get('usuario').then((val) => {
    //   if(nomUs === val.nombreUs && pass === val.password){
    //     return true;
    //   }else{
    //     return false;
    //   }
    // });

    const usuarios = await this.storage.get('usuario');
    if(nomUs === usuarios.nombreUs && pass === usuarios.password){
          return true;
        }else{
          return false;
        }
  }
  async getusuario(){
    const usuarios = await this.storage.get('usuario');
    return usuarios;
  }
}
