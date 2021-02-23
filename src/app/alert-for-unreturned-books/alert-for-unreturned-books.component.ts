import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookIssueDTO } from '../model/BookIssueDTO';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'alert-for-unreturned-books',
  templateUrl: './alert-for-unreturned-books.component.html',
  styleUrls: ['./alert-for-unreturned-books.component.css']
})
export class AlertForUnreturnedBooksComponent implements OnInit {

  constructor(private adminService : AdminService) { }

  orangeName : string = "";
  yellowName : string = "";
  redName : string = "";

  ngOnInit(): void {
    
    let currentDate : Date = new Date();
    let unreturnedBooks : Observable<BookIssueDTO[]> = this.adminService.alertForUnreturnedBook();
    unreturnedBooks.subscribe(
      (response : BookIssueDTO[])=>{
        response
        .forEach(element => 
          {
            let issuedDate = new Date(element.issueBookDate);
          if( (currentDate.getTime() - issuedDate.getTime()) == 14*86400000){            
            this.yellowName = this.yellowName + element.userName;
            //console.log("Inside yellow color : ",this.yellowName);
          }else if(currentDate.getTime() - issuedDate.getTime() == 15*86400000){
            this.orangeName = this.orangeName + element.userName;
            //console.log("Inside orange color : ",this.orangeName);
          }else if((currentDate.getTime() - issuedDate.getTime()) > 15*86400000){
            this.redName = this.redName + element.userName;
            //console.log("Inside red color : ",this.redName);
          }
        })
      }
    );
    //alert(this.orangeName+this.yellowName+this.redName);

  }

}
