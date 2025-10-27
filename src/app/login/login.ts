import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { RouterModule } from "@angular/router";
import { Router } from '@angular/router';

interface Usuario {
  nombreUsuario: string;
  correo: string;
  contrasenia: string;
}

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true
})
export class Login {
  //Controla qué panel mostrar (login o registro)
  isSignUpActive = false;

  //Formularios reactivos
  registerForm!: FormGroup;
  loginForm!: FormGroup;

  usuarios: Usuario[] = [
    { nombreUsuario: 'juan23', correo: 'juan@mail.com', contrasenia: '12345' },
    { nombreUsuario: 'briggitte', correo: 'briggitte@mail.com', contrasenia: 'admin123' }
  ];

  registerAttempt = false;
  mensaje = '';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    //Formulario de registro
    this.registerForm = this.fb.group({
      nombreUsuario: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasenia: ['', Validators.required],
      telefono: [''],
      acepto: [false]
    });

    //Formulario de login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  //Alternar entre login y registro
  togglePanel(signUp: boolean): void {
    this.isSignUpActive = signUp;
    this.mensaje = ''; // limpia mensajes anteriores
  }

  //Registro de usuario (sin backend)
  onRegister(): void {
    this.registerAttempt = true;
    this.mensaje = '';

    if (!this.registerForm.valid || !this.registerForm.get('acepto')?.value) {
      this.mensaje = 'Por favor completa todos los campos y acepta los términos.';
      return;
    }

    const nuevoUsuario: Usuario = {
      nombreUsuario: this.registerForm.value.nombreUsuario,
      correo: this.registerForm.value.correo,
      contrasenia: this.registerForm.value.contrasenia
    };

    // Verificar si ya existe
    const existe = this.usuarios.some(u => u.correo === nuevoUsuario.correo);
    if (existe) {
      this.mensaje = '⚠️ Este correo ya está registrado.';
      return;
    }

    this.usuarios.push(nuevoUsuario);
    this.mensaje = '✅ Registro exitoso. Ahora puedes iniciar sesión.';
    this.registerForm.reset();
    this.isSignUpActive = false;
  }

  //Inicio de sesión con datos quemados
  onLogin(): void {
    this.mensaje = '';

    const { email, password } = this.loginForm.value;

    const usuario = this.usuarios.find(
      u => u.correo === email && u.contrasenia === password
    );

    if (usuario) {
      this.mensaje = `Bienvenido ${usuario.nombreUsuario} 👋`;
      this.router.navigate(['/menu-horizontal']);
      this.loginForm.reset();
    } else {
      this.mensaje = '❌ Correo o contraseña incorrectos.';
    }
  }
}
