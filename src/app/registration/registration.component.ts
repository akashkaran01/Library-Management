import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDTO } from '../model/UserDTO';
import { UserService } from '../service/user.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  minAge : Date = new Date();  

  constructor(private service : UserService, private router : Router) {
  }

  ngOnInit(): void {
      this.minAge.setDate(new Date().getDate() - 12*365);
  }

  registration(registrationForm){

    let username = registrationForm.value.username;
    let password = registrationForm.value.password;
    let firstName = registrationForm.value.firstName;
    let lastName = registrationForm.value.lastName;
    let dob = registrationForm.value.dob;
    //let d_o_b = registrationForm.value.dob;
    //let dob = new Date(d_o_b);
    let mob_No = registrationForm.value.mob_No;
    let email = registrationForm.value.email;

    let user = new UserDTO(username, password, firstName, lastName, dob, mob_No, email);
    console.log(user.dob);

    let result : Observable<UserDTO> = this.service.registration(user);
    result.subscribe((response:UserDTO) =>{
      alert(response.serverResponse);
      console.log(response.serverResponse);
      this.router.navigateByUrl('');
    }, error=>{
      alert(error['error']['message']);
      console.log("Error : ",error['error']['message']);
    });

    registrationForm.reset();
  }
}
