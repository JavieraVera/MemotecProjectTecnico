import { Component, OnInit } from '@angular/core';
import { Contacto } from '../Interfaces/interfaces';
import { ContactoService } from '../../service/contacto.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
contactos: Contacto[];
cargado = false;
  constructor(private contactoSerice: ContactoService) { }

  ngOnInit() {
    this.contactoSerice.getContacto()
    .then(res=>{
      this.contactos = res;
      this.cargado = true;
    })
  }

  wsp(index){
    console.log(this.contactos[index].telefono);
  }

}
