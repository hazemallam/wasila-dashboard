import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICourse } from 'src/app/models/icourse';
import { CourseServieService } from 'src/app/services/course/course-servie.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
  course:ICourse = {id:0, image:'', text1:'', text2:'', time:''}
  courses:ICourse[] = []
  constructor(private courseService : CourseServieService, private router : Router) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((response)=>{
      console.log(response)
      this.courses = response;
    },
     (err)=>{
       console.log(err)
     })
    
    
  }

  add(){
    if(this.course.id === 0){
      this.courseService.postCourse(this.course).subscribe((response)=>{
        console.log('success')
        this.course = {id:0, image:'', text1:'', text2:'', time:''};
        // this.router.navigate(['/course']);
        // window.open("http://localhost:5000/course", "_self")
        window.location.reload()
      },
      (err)=>{
        console.log(err)
      })
    }
    else{
      this.courseService.updateCourse(this.course).subscribe((response)=>{
        console.log('updated successfully')
        this.course = {id:0, image:'', text1:'', text2:'', time:''};
        // this.router.navigate(['/']);
        // this.router.navigate(['/course']);
        // window.open("http://localhost:5000/course", "_self")
        window.location.reload()
      }, (err)=>{
        console.log(err)
      })
    }
   
  }
  update(id:Number, image:String, text1:String, text2:String, time:String){
    this.course = {id:id, image:image, text1:text1, text2:text2, time:time};   
  }
  delete(id:Number){
    let sure = confirm('Are you sure ?')
    if(sure){
      this.courseService.deleteCourse(id).subscribe((response)=>{
        // this.router.navigate(['/']);
        // window.open("http://localhost:5000/course", "_self")
        // this.router.navigate(['/course']);
        window.location.reload()
        console.log('deleted successfully')
      }, (err)=>{
        console.log(err)
      })
    }

    
  }


}
