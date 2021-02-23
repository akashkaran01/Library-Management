import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksDTO } from '../model/BooksDTO';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  service : AdminService;
  serverResponse : string;

  constructor(service : AdminService) {
    this.service = service;
   }

  ngOnInit(): void {
  }

  deleteBook(deleteBookForm){

    let bookName = deleteBookForm.value.bookName;

    let result : Observable<BooksDTO> = this.service.deleteBook(bookName);
    result.subscribe((response:BooksDTO)=>{
      alert(response.serverResponse);
    },
    (error:Response)=>{
      alert(error['error']['message']);
      console.log("Error",error);
    });

    deleteBookForm.reset();
  }
}
