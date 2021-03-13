import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/models/iusers';
import { UserServiceService } from 'src/app/services/users/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:IUsers[] = []
  constructor(private usersService: UserServiceService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((response)=>{
      this.users = response
    })
  }

}
