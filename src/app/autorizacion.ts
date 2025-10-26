import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {
  constructor() {}

  isAuthorized(): boolean {
    // Implement your authorization logic here
    return true; // Placeholder
  }
}
