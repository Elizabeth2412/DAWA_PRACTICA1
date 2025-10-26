import { Component } from '@angular/core';
import { AutorizacionService } from '../autorizacion';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-menu-horizontal',
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule    ],
  templateUrl: './menu-horizontal.html',
  styleUrl: './menu-horizontal.css'
})
export class MenuHorizontal  implements OnInit{
  logueadoCabecera: boolean = false;

  constructor(public autorizacionService: AutorizacionService) {}

  ngOnInit(): void {
    this.autorizacionService.loguedo.subscribe((data) => {
      this.logueadoCabecera = data;
      console.log('Estado de logueo en cabecera:', this.logueadoCabecera);
    });
  }

  validarUsuario(){
    this.autorizacionService.loguedo.next(true);
  }

  cerrarSesion(){
    this.autorizacionService.loguedo.next(false);
  }

}
