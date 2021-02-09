import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/models/icourse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseServieService {

  constructor(private http : HttpClient) { }
  getCourses():Observable<ICourse[]>{
    return this.http.get<ICourse[]>(`${environment.baseUrl}/coursess`);
  }
  postCourse(course : ICourse):Observable<ICourse>{
    return this.http.post<ICourse>(`${environment.baseUrl}/coursess`, course);
  }
  updateCourse(course:ICourse):Observable<ICourse>{
    return this.http.put<ICourse>(`${environment.baseUrl}/coursess/${course.id}`, course);
  }
  deleteCourse(id:Number):Observable<ICourse>{
    return this.http.delete<ICourse>(`${environment.baseUrl}/coursess/${id}`);
  }
}
