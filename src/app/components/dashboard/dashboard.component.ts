import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icart } from 'src/app/models/icart';
import { LoginServiceService } from 'src/app/services/login/login-service.service';
import { OrderServiceService } from 'src/app/services/order/order-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  orders:Icart[] = []
  constructor(private loginService: LoginServiceService, private router: Router, private orderService: OrderServiceService) { }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((response)=>{
      this.orders = response
    })
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
