import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdmin } from 'src/app/models/iadmin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient) { }
  getAdmins():Observable<IAdmin[]>{
    return this.http.get<IAdmin[]>(`${environment.baseUrl}/admins`)
  }
  postAdmin(Admin : IAdmin):Observable<IAdmin>{
    return this.http.post<IAdmin>(`${environment.baseUrl}/admins`, Admin);
  }
  updateAdmin(Admin:IAdmin):Observable<IAdmin>{
    return this.http.put<IAdmin>(`${environment.baseUrl}/admins/${Admin.id}`, Admin);
  }
  deleteAdmin(id:Number):Observable<IAdmin>{
    return this.http.delete<IAdmin>(`${environment.baseUrl}/admins/${id}`);
  }
  getAdmin(userName:string):Observable<IAdmin[]>{
    return this.http.get<IAdmin[]>(`${environment.baseUrl}/admins/?userName=${userName}`)
  }
}
