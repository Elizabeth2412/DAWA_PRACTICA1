import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuHorizontal } from "./menu-horizontal/menu-horizontal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuHorizontal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('intro-angular');
}
