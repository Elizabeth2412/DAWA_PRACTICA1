import { Component, inject, OnInit } from '@angular/core';
import { AutorizacionService } from '../autorizacion';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterModule, Router } from "@angular/router"; 
import { MatDialog } from '@angular/material/dialog';
import { Login } from '../login/login';

@Component({
  selector: 'app-menu-horizontal',
  imports: [CommonModule,  MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './menu-horizontal.html',
  styleUrl: './menu-horizontal.css',
  standalone: true
})
export class MenuHorizontal  implements OnInit{
  logueadoCabecera: boolean = false;


  constructor(public autorizacionService: AutorizacionService, 
              private router: Router, 
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.autorizacionService.loguedo.subscribe((data) => {
      this.logueadoCabecera = data;
      console.log('Estado de logueo en cabecera:', this.logueadoCabecera);
    });
  }

  validarUsuario(){
    const dialogRef = this.dialog.open(Login, {
      //width: '1000px',
      data: { email: this.autorizacionService.email, password: this.autorizacionService.password }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.autorizacionService.loguedo.next(true);
        this.router.navigate(['/principal']);
      }
    });


  }

  iniciarSesion() {
    this.autorizacionService.iniciarSesion();

  }

  cerrarSesion(){
    this.autorizacionService.cerrarSesion();
    this.router.navigate(['']);
  }

}
