import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Componente, Usuario } from '../Interfaces/interfaces';
import { DataService } from '../../service/data.service';
import { UsuarioService } from '../../service/usuario.service';



@Component({
  selector: 'app-sesion-complet-iniciada',
  templateUrl: './sesion-complet-iniciada.page.html',
  styleUrls: ['./sesion-complet-iniciada.page.scss'],
})
export class SesionCompletIniciadaPage implements OnInit {
  nombreUS = '';
  componentes: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
               private dataService: DataService,
               private usuarioService: UsuarioService ) { }

  ngOnInit() {
      this.componentes = this.dataService.getMenuOpts();
      this.usuarioService.getusuario().then(res => {
        this.nombreUS = res.nombreUs;
      })
  }
  mostrarMenu(){
    this.menuCtrl.open('first');
  }

}
