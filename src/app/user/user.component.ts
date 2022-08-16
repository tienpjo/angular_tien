import { Component, OnInit } from '@angular/core';
import userData from './users.json';
import { User } from './user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  userShow: User[] = userData;

  constructor() {
    console.log(this.userShow);
  }

  ngOnInit(): void {
    console.log('Start Init');
  }
}
