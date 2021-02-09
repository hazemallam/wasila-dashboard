import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideo } from 'src/app/models/ivideo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService {

  constructor(private http : HttpClient) { }
  getVideos():Observable<IVideo[]>{
    return this.http.get<IVideo[]>(`${environment.baseUrl}/videos`);
  }
  postVideo(videos : IVideo):Observable<IVideo>{
    return this.http.post<IVideo>(`${environment.baseUrl}/videos`, videos);
  }
  updateVideo(videos:IVideo):Observable<IVideo>{
    return this.http.put<IVideo>(`${environment.baseUrl}/videos/${videos.id}`, videos);
  }
  deleteVideo(id:Number):Observable<IVideo>{
    return this.http.delete<IVideo>(`${environment.baseUrl}/videos/${id}`);
  }
}
