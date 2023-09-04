import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  mdl_usuario: string = ''; // Vacío para que el usuario lo ingrese
  mdl_contrasena: string = ''; // Vacío para que el usuario lo ingrese
  mdl_confirm_contrasena: string = '';
  mdl_input_u: string = ''; // Campo de entrada del usuario
  mdl_input_c: string = ''; // Campo de entrada de la contraseña

  mensaje: string = '';
  isAlertOpen = false;
  public alertButtons = ['OK'];

  usuariosRegistrados: { username: string; password: string }[] = [];

  constructor(private router: Router) {}

  registro() {
    if (this.mdl_usuario === '' || this.mdl_contrasena === '') {
      this.mensaje = 'Debe ingresar los datos para poder registrarse.';
      this.isAlertOpen = true;
    } else if (this.mdl_contrasena !== this.mdl_confirm_contrasena) {
      this.mensaje = 'Las contraseñas no coinciden.';
      this.isAlertOpen = true;
    } else {
      // Verificar si el usuario ya está registrado
      const usuarioExistente = this.usuariosRegistrados.find(
        (usuario) => usuario.username === this.mdl_usuario
      );

      if (usuarioExistente) {
        this.mensaje = 'El usuario ya existe. Por favor, inicie sesión.';
        this.isAlertOpen = true;
      } else {
        // Registrar al usuario
        this.usuariosRegistrados.push({
          username: this.mdl_usuario,
          password: this.mdl_contrasena,
        });

        // Convertir el arreglo de usuarios en una cadena JSON
        const usuariosJSON = JSON.stringify(this.usuariosRegistrados);

        // Guardar la cadena JSON en un archivo JSON localmente (en el navegador)
        const blob = new Blob([usuariosJSON], { type: 'application/json' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'usuarios.json';
        a.click();
        window.URL.revokeObjectURL(url);

        // Redirigir al usuario a la página de inicio de sesión
        this.mensaje = 'Usuario registrado correctamente. Puede iniciar sesión.';
        this.isAlertOpen = true;
      }
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
