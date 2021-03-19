
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.page.html',
  styleUrls: ['./iniciosesion.page.scss'],
})
export class IniciosesionPage implements OnInit {

  login= {
    nomUs: '',
    password: ''
  };
  form= new FormControl('');
  nombre:string;
  contrasena:string;
  constructor(public router: Router,
              private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  logForm(){
    // console.log("funciona");
    // console.log(this.nombre);
    // console.log(this.contrasena);
    // if(this.nombre === undefined || this.contrasena === undefined){
    //   console.log("Campos Vacios");
    // }else{
    //   this.router.navigateByUrl('/sesioncompletiniciada');
    // }

    this.usuarioService.validarUs(this.nombre, this.contrasena).then(res=> {
      if(res){
        this.router.navigateByUrl('/sesioncompletiniciada');
      }else{
        console.log('Datos incorrectos');
      }
    });
    
    }
}
