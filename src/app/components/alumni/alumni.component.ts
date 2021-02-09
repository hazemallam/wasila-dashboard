import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlumni } from 'src/app/models/ialumni';
import { AlumniServiceService } from 'src/app/services/alumni/alumni-service.service';
@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {
  alumni : IAlumni = {id:0, name:'', alumni:''}
  alumnis : IAlumni[] = []
  constructor(private alumniService : AlumniServiceService, private router : Router) { }

  ngOnInit(): void {
    this.alumniService.getAlumni().subscribe((response)=>{
      console.log(response)
      this.alumnis = response;
    },
     (err)=>{
       console.log(err)
     })
  }

  add(){
    if(this.alumni.id === 0){
      this.alumniService.postAlumni(this.alumni).subscribe((response)=>{
        console.log('success')
        this.alumni = {id:0, name:'', alumni:''};
        this.router.navigate(['/']);

      },
      (err)=>{
        console.log(err)
      })
    }
    else{
      this.alumniService.updateAlumni(this.alumni).subscribe((response)=>{
        console.log('updated successfully')
        this.alumni = {id:0, name:'', alumni:''};
        this.router.navigate(['/']);
      }, (err)=>{
        console.log(err)
      })
    }
   
  }

  update(id:Number, name:String, alumni:String){
    this.alumni = {id:id, name:name, alumni:alumni}
   
  }
  delete(id:Number){
    let sure = confirm('Are you sure ?')
    if(sure){
      this.alumniService.deleteAlumni(id).subscribe((response)=>{
        this.router.navigate(['/']);
        console.log('deleted successfully')
      }, (err)=>{
        console.log(err)
      })
    }

    
  }

  

}
