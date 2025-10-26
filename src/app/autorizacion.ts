import { B } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
public loguedo = new BehaviorSubject<boolean>(false);

  constructor() {}

  isAuthorized(): boolean {
    // Implement your authorization logic here
    return true; // Placeholder
  }
}
