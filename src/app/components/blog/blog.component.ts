import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IBlog } from 'src/app/models/iblog';
import { BlogServiceService } from 'src/app/services/blog/blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit, OnChanges {
  blog:IBlog = {id:0, name:'', date:'', like:0, comment:0, authorimage:'', text:'', image:''};
  blogs:IBlog[] = [];
  constructor(private blogService : BlogServiceService, private router : Router) { }
 
  ngOnChanges(changes :SimpleChanges): void {
    // this.blogService.getBolgs().subscribe((response)=>{
    //   console.log(response)
    //   this.blogs = response;
    // },
    //  (err)=>{
    //    console.log(err)
    //  })
    console.log(changes)
    
  }
  

  ngOnInit(): void {
    this.blogService.getBolgs().subscribe((response)=>{
      console.log(response)
      this.blogs = response;
    },
     (err)=>{
       console.log(err)
     })
    
    
  }

  add(){
    if(this.blog.id === 0){
      this.blogService.postBlog(this.blog).subscribe((response)=>{
        console.log('success')
        this.blog = {id:0, name:'', date:'', like:0, comment:0, authorimage:'', text:'', image:''};
        this.router.navigate(['/']);

      },
      (err)=>{
        console.log(err)
      })
    }
    else{
      this.blogService.updateBlog(this.blog).subscribe((response)=>{
        console.log('updated successfully')
        this.blog = {id:0, name:'', date:'', like:0, comment:0, authorimage:'', text:'', image:''};
        this.router.navigate(['/']);
      }, (err)=>{
        console.log(err)
      })
    }
   
  }
  update(id:Number, name:String, date:String, like:Number, comment:Number, autherImage:String, text:String, image:String){
    this.blog = {id:id, name:name, date:date, like:like, comment:comment, authorimage:autherImage, text:text, image:image}
   
  }
  delete(id:Number){
    let sure = confirm('Are you sure ?')
    if(sure){
      this.blogService.deleteBlog(id).subscribe((response)=>{
        this.router.navigate(['/']);
        console.log('deleted successfully')
      }, (err)=>{
        console.log(err)
      })
    }

    
  }

}
