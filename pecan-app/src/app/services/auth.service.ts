import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    token: string = 'jwttoken';

    constructor() { }

    loadToken() {
        return this.token;
    }
}