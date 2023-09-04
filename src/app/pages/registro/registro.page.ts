import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  mdl_usuario: string = 'maxi';
  mdl_contrasena: string = '1234';
  mdl_confirm_contrasena: string = '123';
  mdl_confirm_token: string = '12345';


  mdl_input_u: string = '';
  mdl_input_c: string = '';
  mdl_input_cc: string = '';
  



  mesaje: string = '';
  isAlertOpen = false;
  public alertButtons = ['OK'];

  constructor(private router: Router) { }

  ngOnInit() {
  }


  registro() {

    if (this.mdl_usuario == '' && this.mdl_contrasena == '') {

      this.mesaje = 'Debe ingresar los datos para poder registrarse';
      this.isAlertOpen = true;

    } if (this.mdl_contrasena  !== this.mdl_confirm_contrasena ) {

      this.mesaje = 'Las contrasenas no coinciden';
      this.isAlertOpen = true;
    } else { if (this.mdl_usuario == this.mdl_input_u && this.mdl_contrasena == this.mdl_input_c) {
      //parametros para navegacion
      let parametros: NavigationExtras = {
        state:{
          user: this.mdl_usuario,
          pass: this.mdl_contrasena
        }
      }
      this.router.navigate(['inicio'],parametros);
    } else {
      this.mesaje = 'Credenciales Invalidas.';
      this.isAlertOpen = true;
    }


  }




  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
