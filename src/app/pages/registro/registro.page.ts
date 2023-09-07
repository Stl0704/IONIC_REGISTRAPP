import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  //MODELO PARA REGISTRAR A USUARIO

  mdl_usuario_nombre: string = '';
  mdl_usuario_c: string = '';
  mdl_contrasena: string = '';
  mdl_confirm_contrasena: string = '';


// OBJETO USUARIO:

  usuario = {
    correo_usuario: '',
    contrasena_usuario: '',
  };

// ALERT 

  mensaje: string = '';
  isAlertOpen = false;
  public alertButtons = ['OK'];



  constructor(private router: Router) { }

  ngOnInit() {
  }

  registro() {


    if(this.mdl_usuario_nombre == '' && this.mdl_usuario_c== '' && this.mdl_contrasena == '' && this.mdl_confirm_contrasena == ''){
      this.mensaje = 'Debe ingresar valores';
      this.isAlertOpen = true;
    } else {

      localStorage.setItem('usuario', JSON.stringify(this.usuario));

      this.usuario.contrasena_usuario = this.mdl_contrasena;
      this.usuario.correo_usuario = this.mdl_usuario_c;

      // ALMACENA LOS DATOS USUARIO EN LOCAL STORAGE
      localStorage.setItem('usuario.contrasena_usuario', JSON.stringify(this.usuario.contrasena_usuario));
      localStorage.setItem('usuario.correo_usuario', JSON.stringify(this.usuario.correo_usuario));

      // OBTIENE EL LOCALSTORAGE PARA QUE ESTOS PARAMETROS VIAJEN AL LOGIN
      localStorage.getItem('usuario.contrasena_usuario');
      localStorage.getItem('usuario.correo_usuario');

      this.router.navigate(['inicio']).then(() => {
        location.reload();
      });

    }
  }
// OPEN ALERT
  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
