import { Component, OnInit } from '@angular/core';
import { UserViewModel } from 'src/app/models/user-view-model';
import { UserListService } from 'src/app/services/user-list-service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  public users: UserViewModel[]

  constructor(private service: UserListService) { }

  ngOnInit(): void {
    this.service.getUserList().subscribe((result:any) => {
      debugger
      this.users = result.data
    });
  }

}
