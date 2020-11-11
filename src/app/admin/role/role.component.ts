import { Component, OnInit } from '@angular/core';
import {RolesService} from '../services/roles.service';
import {IRoleDetails, IRoleNames} from '../models/roles-modal';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  roleNames: IRoleNames[] = [];
  roleName: string;
  roleDescription: string;
  isRoleNameValid: boolean = false;
  isRoleNameCalled: boolean = false;
  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.rolesService.getRoleNames().subscribe(
      (data: IRoleNames[]) => {
         this.roleNames = data;
      }
    );
  }
  
  getRoleDetails(roleName: string){
    if(roleName == 'Please Select the Role'){
      this.isRoleNameCalled = false;
    }
    this.rolesService.getRoleDetails(roleName).subscribe(
      (data: IRoleDetails) => {
        this.isRoleNameCalled = true;
        this.roleName = data.roleName;
        this.roleDescription = data.description;
      }
    );    
  }
}
