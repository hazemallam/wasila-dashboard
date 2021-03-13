import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { IUser } from 'src/app/models/iuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http : HttpClient, private router:Router) { }
  login(userName: String, password: String){
   this.http.get<IUser[]>(`${environment.baseUrl}/admins/?userName=${userName}&password=${password}`).subscribe((response)=>{
     if(response.length != 0){
      localStorage.setItem('userToken', `${userName}`)
      localStorage.setItem('name',`${response[0].name}`)
      console.log(response)
      this.router.navigate(['/dashboard'])
      // window.location.reload()
      

      
      
      // this.router.navigate([])
    }
    else{
      alert('you must get your credintials')
    }
     }
      , (err)=>{
      console.log(err)
    })

  }
  getName():String{
    let name = localStorage.getItem('name')
    if(name)
      return name 
    else 
      return ''
  }
  
  logout(){
    localStorage.removeItem('userToken')
    localStorage.removeItem('name')
  }
  isLoggedIn():boolean{
    if(localStorage.getItem('userToken'))
      return true
    else
    return false
  }
}
