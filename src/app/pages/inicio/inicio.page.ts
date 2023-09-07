import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  mdl_usuario_c: string = '';
  mdl_contrasena: string = '';

  usuario_contrasena: string;
  usuario_correo: string;
  usuario_confir_contr: string;



  isAlertOpen = false;
  public alertButtons = ['OK'];
  mensaje: string = '';

  constructor(private router: Router) {

    this.usuario_contrasena = localStorage.getItem('usuario.contrasena_usuario') || ''; // Valor predeterminado como cadena vacía
    this.usuario_correo = localStorage.getItem('usuario.correo_usuario') || '';
    this.usuario_confir_contr = localStorage.getItem('usuario.contrasena_usuario') || '';
  }


  ngOnInit() {
  }


  navegar() {


    this.mdl_usuario_c = JSON.stringify(this.mdl_usuario_c);
    this.mdl_contrasena = JSON.stringify(this.mdl_contrasena);

    if (this.mdl_usuario_c == '' && this.mdl_contrasena == '') {
    
      this.mensaje = 'Debe ingresar valores';
      this.isAlertOpen = true;

    } else {
      if (this.mdl_usuario_c == this.usuario_correo && this.mdl_contrasena == this.usuario_contrasena && this.usuario_confir_contr) {

        // Actualiza el localStorage aquí antes de navegar a 'principal'
        localStorage.setItem('usuario.contrasena_usuario', this.usuario_confir_contr);

        let parametros: NavigationExtras = {
          state: {
            user: this.mdl_usuario_c,
            pass: this.mdl_contrasena
          }
        };
        this.router.navigate(['principal'], parametros);

        // vuelve a inicilaizar las variables en 0 para no verse al usar el boton "backbutton"
        this.mdl_usuario_c = '';
        this.mdl_contrasena = '';

      } else {
        this.mensaje = 'Credenciales Inválidas';
        this.isAlertOpen = true;
        this.mdl_usuario_c = '';
        this.mdl_contrasena = '';
      }
    }


  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  ResetPass() {
    this.router.navigate(['reset-pass']);

    // vuelve a inicilaizar las variables en 0 para no verse al usar el boton "backbutton"
    this.mdl_usuario_c = '';
    this.mdl_contrasena = '';
  }

  Registro() {
    this.router.navigate(['registro']);

    // vuelve a inicilaizar las variables en 0 para no verse al usar el boton "backbutton"
    this.mdl_usuario_c = '';
    this.mdl_contrasena = '';
  }


}