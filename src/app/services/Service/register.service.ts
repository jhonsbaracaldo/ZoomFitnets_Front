import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Register } from '../Interfaces/register.interface';
import { Observable } from 'rxjs';
import { api } from '../enviroments/eregister';



@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly URL  = api.register

  constructor(private http: HttpClient,private router:Router) { }

  allRegister(): Observable<Register[]> {
    return this.http.get<Register[]>(`${this.URL}/Lista`);
}

}


