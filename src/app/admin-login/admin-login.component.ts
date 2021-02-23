import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  serverResponse : string;

  constructor(private service : AdminService, private router : Router) {

  }

  ngOnInit(): void {
  }

  adminLogin(adminLoginForm){

    let username = adminLoginForm.value.username;
    let password = adminLoginForm.value.password;

    let result : Observable<Admin> = this.service.adminLogin(username,password);
    result.subscribe((response:Admin)=>{
      alert(response.serverResponse);
      this.router.navigateByUrl('admin/alertForUnreturnedBooks');
    },
    (error:Response)=>{
      alert(error['error']['message']);
      console.log("Error : ",error['error']['message']);
    });

    adminLoginForm.reset();
  }

}
