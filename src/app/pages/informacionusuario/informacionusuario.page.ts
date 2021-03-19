import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Usuario } from '../Interfaces/interfaces';

@Component({
  selector: 'app-informacionusuario',
  templateUrl: './informacionusuario.page.html',
  styleUrls: ['./informacionusuario.page.scss'],
})
export class InformacionusuarioPage implements OnInit {
  usuario: Usuario;
  cargado = false;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getusuario()
    .then(res =>{
      this.usuario = res;
      this.cargado = true;
    });
  }

}
