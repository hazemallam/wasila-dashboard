import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ILogin } from 'src/app/models/ilogin';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginData:ILogin = {userName:'', password:''}
  constructor(private loginService : LoginServiceService) { }
  ngAfterViewInit(): void {
  //  window.location.reload()
  }

  ngOnInit(): void {
   
  }
  
 
  
  login(){
    this.loginService.login(this.loginData.userName, this.loginData.password)
    
  }

}
