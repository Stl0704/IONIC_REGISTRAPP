import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.page.html',
  styleUrls: ['./reset-pass.page.scss'],
})


export class ResetPassPage implements OnInit {
  nombre: string = '';
  contrasena: string = '';


  usuario = {
    contrasena_usuario: ''  ,
  };


  isAlertOpen = false;
  public alertButtons = ['OK'];
  mensaje: string = '';

  constructor(private router: Router) { }

  ngOnInit() {

  }

  actualizar(){

    if (this.nombre == '' && this.contrasena == '') {
      this.mensaje = 'Debe ingresar valores';
      this.isAlertOpen = true; 
    } else {
      
      // Almacena los datos de la contraseña del usuario en el localStorage
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.usuario.contrasena_usuario = this.contrasena;
      localStorage.setItem('usuario.contrasena_usuario', JSON.stringify(this.usuario.contrasena_usuario));

      // Obtiene los datos de la contraseña del usuario del localStorage para que no lleguen vacios 
      localStorage.getItem('usuario.contrasena_usuario');
      
      
      this.router.navigate(['inicio']).then(() => {
        location.reload(); 
      }); 
    }

  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }



}