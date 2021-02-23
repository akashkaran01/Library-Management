import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/UserDTO';
import { DataService } from '../service/data.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'user-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service : UserService, private dataService : DataService,
     private router : Router) {
   }

  ngOnInit(): void {
  }

  userLogin(userLoginForm){
    console.log(userLoginForm.value);

    let username = userLoginForm.value.username;
    let password = userLoginForm.value.password;
    let result : Observable<UserDTO> = this.service.validation(username,password);
    result.subscribe(
      (response:UserDTO)=>{
        this.dataService.sharedData = username;
        alert(response.serverResponse);
        this.router.navigateByUrl('user/issueBooks');
      },
      (error:Response)=>{
        alert(error['error']['message']);
        console.log("Error : ",error['error']['message']);        
      }
    );

    userLoginForm.reset();
  }

}
