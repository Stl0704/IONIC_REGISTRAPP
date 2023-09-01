import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  mdl_usuario: string = '';
  mdl_contrasena: string = '';
  mdl_input_u: string = '';
  mdl_input_c: string = '';


  isAlertOpen = false;
  public alertButtons = ['OK']; 
  mensaje: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  navegar() {

    if (this.mdl_usuario == '' && this.mdl_contrasena == ''){

      this.mensaje= 'Debe ingresar valores';
      this.isAlertOpen = true;

    }
    else {

      if (this.mdl_usuario == this.mdl_input_u && this.mdl_contrasena == this.mdl_input_c) {
        //parametros para navegacion
        let parametros: NavigationExtras = {
          state:{
            user: this.mdl_usuario,
            pass: this.mdl_contrasena
          }
        }
        this.router.navigate(['principal'],parametros);
      } else {
        this.mensaje = 'Credenciales Invalidas.';
        this.isAlertOpen = true;
      }

    }


  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }


}
