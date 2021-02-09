import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAlumni } from 'src/app/models/ialumni';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumniServiceService {

  constructor(private http : HttpClient) { }
  getAlumni():Observable<IAlumni[]>{
    return this.http.get<IAlumni[]>(`${environment.baseUrl}/alumniLists`);
  }
  postAlumni(alumni : IAlumni):Observable<IAlumni>{
    return this.http.post<IAlumni>(`${environment.baseUrl}/alumniLists`, alumni);
  }
  updateAlumni(alumni:IAlumni):Observable<IAlumni>{
    return this.http.put<IAlumni>(`${environment.baseUrl}/alumniLists/${alumni.id}`, alumni);
  }
  deleteAlumni(id:Number):Observable<IAlumni>{
    return this.http.delete<IAlumni>(`${environment.baseUrl}/alumniLists/${id}`);
  }
}
