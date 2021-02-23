import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksDTO } from '../model/BooksDTO';
import { AdminService } from '../service/admin.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  bookName : string;
  constructor(private adminService : AdminService, private dataService : DataService,
    private router : Router) {
      this.bookName = dataService.sharedData;
      console.log(this.bookName);
   }

  ngOnInit(): void {
  }

  editBook(editBookForm){
    let bookName = this.bookName;
    let authorName = editBookForm.value.authorName;
    let publishedYear = editBookForm.value.publishedYear;

    let book = new BooksDTO(bookName,authorName, publishedYear);
    let result : Observable<BooksDTO> = this.adminService.editBook(book);
    result.subscribe((response:BooksDTO)=>{
      alert(response.serverResponse);
      this.router.navigateByUrl("admin/viewAllBooks");
    },
    (error:Response)=>{
      alert(error['error']['message']);
      console.log("Error",error);
    });

    editBookForm.reset();
  }

}
