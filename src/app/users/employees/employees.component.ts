import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent
{
  constructor (public usersList: UsersService)
  {}
  ngOnInit()
  {
        
  }

}
