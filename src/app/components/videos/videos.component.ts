import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IVideo } from 'src/app/models/ivideo';
import { VideoServiceService } from 'src/app/services/videos/video-service.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  video:IVideo = {id:0, title:'', minutes:0, image:''}
  videos:IVideo[] = []
  constructor(private videoService : VideoServiceService, private router: Router) { }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((response)=>{
      console.log(response)
      this.videos = response;
    },
     (err)=>{
       console.log(err)
     })
    
    
  }

  add(){
    if(this.video.id === 0){
      this.videoService.postVideo(this.video).subscribe((response)=>{
        console.log('success')
        this.video = {id:0, title:'', minutes:0, image:''};
        // this.router.navigate(['/']);
        window.location.reload()

      },
      (err)=>{
        console.log(err)
      })
    }
    else{
      this.videoService.updateVideo(this.video).subscribe((response)=>{
        console.log('updated successfully')
        this.video = {id:0, title:'', minutes:0, image:''};
        // this.router.navigate(['/']);
        window.location.reload()
      }, (err)=>{
        console.log(err)
      })
    }
   
  }
  update(id:Number, title:String, minutes:Number, image:String){
    this.video = {id:id, title:title, minutes:minutes, image:image};   
  }
  delete(id:Number){
    let sure = confirm('Are you sure ?')
    if(sure){
      this.videoService.deleteVideo(id).subscribe((response)=>{
        // this.router.navigate(['/']);
        window.location.reload()
        console.log('deleted successfully')
      }, (err)=>{
        console.log(err)
      })
    }

    
  }


}
