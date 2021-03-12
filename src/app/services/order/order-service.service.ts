import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icart } from 'src/app/models/icart';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }
  getOrders():Observable<Icart[]>{
    return this.http.get<Icart[]>(`${environment.baseUrl}/carts`);
  }
}
