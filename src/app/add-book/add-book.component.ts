import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksDTO } from '../model/BooksDTO';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  currentDate : Date = new Date();

  constructor(private service : AdminService) {
    this.service = service;
   }

  ngOnInit(): void {
  }

  addBook(addBookForm){
    let bookName = addBookForm.value.bookName;
    let authorName = addBookForm.value.authorName;
    let publishedYear = addBookForm.value.publishedYear;

    let book = new BooksDTO(bookName,authorName, publishedYear);
    
    let result : Observable<BooksDTO> = this.service.addBook(book);
    result.subscribe((response:BooksDTO)=>{
      alert(response.serverResponse);
    },
    (error:Response)=>{
      alert(error['error']['message']);
      console.log("Error",error);
    });

    addBookForm.reset();
  }

}
