import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../user.class';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})

export class UserEditComponent implements OnInit {

  constructor(
    
  ) { }

  ngOnInit() {
  }

}
