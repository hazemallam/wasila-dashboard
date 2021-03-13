import { Component, OnInit } from '@angular/core';
import { IAdmin } from 'src/app/models/iadmin';
import { AdminServiceService } from 'src/app/services/admin/admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  admin:IAdmin = {id:0, userName:'', name:'', password:''}
  admins:IAdmin[] = []
  constructor(private adminService: AdminServiceService) { }

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe((response)=>{
      this.admins = response
    })
  }
  add(){
    if(this.admin.id === 0){
      this.adminService.postAdmin(this.admin).subscribe((response)=>{
        console.log('success')
        this.admin = {id:0, name:'', userName:'', password:''};
        // this.router.navigate(['/course']);
        // window.open("http://localhost:5000/course", "_self")
        window.location.reload()
      },
      (err)=>{
        console.log(err)
      })
    }
    else{
      this.adminService.updateAdmin(this.admin).subscribe((response)=>{
        console.log('updated successfully')
        this.admin = {id:0, name:'', userName:'', password:''};
        // this.router.navigate(['/']);
        // this.router.navigate(['/course']);
        // window.open("http://localhost:5000/course", "_self")
        window.location.reload()
      }, (err)=>{
        console.log(err)
      })
    }
   
  }
  update(id:number, name:string, userName:string, password:string){
    this.admin = {id:id, name:name, userName:userName, password:password};   
  }
  delete(id:Number){
    let sure = confirm('Are you sure ?')
    if(sure){
      this.adminService.deleteAdmin(id).subscribe((response)=>{
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
