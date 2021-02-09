import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/models/iblog';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private http : HttpClient) { }
  getBolgs():Observable<IBlog[]>{
    return this.http.get<IBlog[]>(`${environment.baseUrl}/blog`);
  }
  postBlog(blog : IBlog):Observable<IBlog>{
    return this.http.post<IBlog>(`${environment.baseUrl}/blog`, blog);
  }
  updateBlog(blog:IBlog):Observable<IBlog>{
    return this.http.put<IBlog>(`${environment.baseUrl}/blog/${blog.id}`, blog);
  }
  deleteBlog(id:Number):Observable<IBlog>{
    return this.http.delete<IBlog>(`${environment.baseUrl}/blog/${id}`);
  }
}
