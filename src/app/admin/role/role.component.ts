import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleName: string;
  roleDescription: string;
  isRoleNameValid: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  getRoleInfo(role: string){
    this.roleName = role;
    if(this.roleName == "Admin"){
      this.roleDescription = "This role is Admin role where admin can control anything";
      this.isRoleNameValid=true;
    }
    else if(this.roleName == "User"){
      this.roleDescription = "This role is User role where the user is restricted only to the required actions";
      this.isRoleNameValid=true;
    }
    else{
      this.isRoleNameValid=false;
    }
  }
}
