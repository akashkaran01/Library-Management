import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/UserDTO';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  users: UserDTO[]=[];
  show : boolean = false;
  approval : boolean[]=[true,false];
  
  user : UserDTO;
  
  constructor(private service: AdminService) {
    this.service=service;
   }

  ngOnInit(): void {
    let result : Observable<UserDTO[]> = this.service.viewAllUsers();
    result.subscribe(
        (response : UserDTO[])=>{
          this.users = response;
          this.show = true;
          console.log(this.users);
        },
        (error: Response) =>{
          alert(error['error']['message']);
          console.log(error['error']['message']);
          console.log("Error",error);
        }
      );
  }
 
  approveUser(user : UserDTO){
    console.log(user);

    let result : Observable<UserDTO> = this.service.approval(user);
    result.subscribe(
      (response : UserDTO)=>{
        alert(response.serverResponse);
        console.log(response.serverResponse);

      },
      (error: Response) =>{
        alert(error['error']['message']);
        console.log("Error",error);
      }
    );
  }

}
