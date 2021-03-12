import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  name:String = ''
  constructor(private loginService : LoginServiceService, private router : Router) { }

  ngOnInit(): void {
    this.name = this.loginService.getName()
  }
  logout(){
    this.loginService.logout()
    window.open("http://localhost:5000/","_self")
    // this.router.navigate(['/'])
  }

}
