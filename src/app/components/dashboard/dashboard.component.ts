import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login/login-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private loginService: LoginServiceService, private router: Router) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    //   new Chartist.Line('#traffic-chart', {
    //     labels: ['January', 'Februrary', 'March', 'April', 'May', 'June'],
    //     series: [
    //       [23000, 25000, 19000, 34000, 56000, 64000]
    //     ]
    //   }, {
    //   low: 0,
    //   showArea: true
    // });
    setTimeout(() => {
      this.loginService.logout()
      this.router.navigate(['/'])
    }, 300000); // Activate after 5 minutes.
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload')
      location.reload()
    } else {
      localStorage.removeItem('foo')
    }

  }


}
