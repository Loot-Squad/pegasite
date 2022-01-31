import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pega } from './pega';

@Injectable({
  providedIn: 'root'
})
export class Pegas4addressService {
  private pegasUrl = 'http://localhost:4200/v1/pegas/owner/user/'; 
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getPegas(address: string): Observable<Pega[]> {
    return this.http.get<Pega[]>(this.pegasUrl+address);
  }
}
