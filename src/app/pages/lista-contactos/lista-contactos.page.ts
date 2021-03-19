import { Component, OnInit } from '@angular/core';
import { ContactoService } from '../../service/contacto.service';
import { Contacto } from '../Interfaces/interfaces';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {
  contactos: Contacto[] = [];
  cargado = false;
  constructor(private contactoService: ContactoService) { 
    console.log("aqui");
  }

  ngOnInit() {
    this.obtenerContactos();
  }
  obtenerContactos(){
    this.contactoService.getContacto()
    .then(res=>{
      this.contactos = res;
      console.log(res);
      this.cargado = true;
    });
}
}
