import { Component } from '@angular/core';
import { AutorizacionService } from '../autorizacion';

@Component({
  selector: 'app-menu-horizontal',
  imports: [],
  templateUrl: './menu-horizontal.html',
  styleUrl: './menu-horizontal.css'
})
export class MenuHorizontal  implements OnInit {
  logueado: boolean = false;
  constructor(public autorizacionService: AutorizacionService) {}

  ngOnInit(): void {
    this.logueado

  }

}
