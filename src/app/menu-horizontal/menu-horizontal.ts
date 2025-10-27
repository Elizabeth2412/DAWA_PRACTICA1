import { Component } from '@angular/core';
import { AutorizacionService } from '../autorizacion';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, Router } from "@angular/router"; 

@Component({
  selector: 'app-menu-horizontal',
  imports: [CommonModule,  MatToolbarModule, MatIconModule, MatButtonModule, RouterModule, RouterLink],
  templateUrl: './menu-horizontal.html',
  styleUrl: './menu-horizontal.css',
  standalone: true
})
export class MenuHorizontal  implements OnInit{
  logueadoCabecera: boolean = false;


  constructor(public autorizacionService: AutorizacionService, private router: Router) {}

  ngOnInit(): void {
    this.autorizacionService.loguedo.subscribe((data) => {
      this.logueadoCabecera = data;
      console.log('Estado de logueo en cabecera:', this.logueadoCabecera);
    });
  }

  validarUsuario(){
    this.autorizacionService.loguedo.next(true);
  }

  iniciarSesion() {
    this.autorizacionService.iniciarSesion();
  }

  cerrarSesion(){
    this.autorizacionService.cerrarSesion();
    this.router.navigate(['/login']);
  }

}
