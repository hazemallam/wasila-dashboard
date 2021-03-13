import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from 'src/app/models/iusers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }
  getUsers():Observable<IUsers[]>{
    return this.http.get<IUsers[]>(`${environment.baseUrl}/users`)
  }
}
