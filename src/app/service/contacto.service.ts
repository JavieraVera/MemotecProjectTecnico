import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Contacto } from '../pages/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  contactos: Contacto[] = [];
  constructor(private storage: Storage) { }

  crearContacto(contacto?: Contacto){
    // this.getContacto().then(res=>{
    //   console.log(res);
    // });
      if(this.contactos.length !== 0){
        this.contactos.unshift(contacto);
        this.storage.set('contacto', this.contactos);
      }else{
        this.getContacto()
        .then(res=>{
          this.contactos = res;
          this.contactos = [contacto];
          this.storage.set('contacto', this.contactos);
        });
      }
  }

  async getContacto(){
    const contactos = await this.storage.get('contacto');
    return contactos;
  }
}
