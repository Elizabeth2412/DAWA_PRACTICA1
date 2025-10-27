import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuHorizontal } from "./menu-horizontal/menu-horizontal";
import { Login } from "./login/login";
import { Copyright } from "./copyright/copyright";

@Component({
  selector: 'app-root',
  imports: [MenuHorizontal, Copyright],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('intro-angular');
}
