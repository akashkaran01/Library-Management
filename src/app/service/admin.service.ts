import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../model/Admin';
import { BookIssueDTO } from '../model/BookIssueDTO';
import { BooksDTO } from '../model/BooksDTO';
import { UserDTO } from '../model/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private client:HttpClient) {

  }

  private baseUrl="http://localhost:8085/admin";

  adminLogin(username: string, password: string) : Observable<Admin>{
    let url = this.baseUrl + "/login/" + username + "/" + password;
    let result : Observable<Admin> = this.client.get<Admin>(url);
    return result;
  }

  viewAllUsers() : Observable<UserDTO[]>{
    let url = this.baseUrl + "/userApproval";
    let result : Observable<UserDTO[]> = this.client.get<UserDTO[]>(url);
    return result;
  }


  approval(user : UserDTO) : Observable<UserDTO>{
    let url = this.baseUrl + "/userApproval";
    let result : Observable<UserDTO> = this.client.put<UserDTO>(url, user);
    return result;
  }

  viewAllBooks() : Observable<BooksDTO[]>{
    let url = this.baseUrl + "/viewAllBooks";
    let result : Observable<BooksDTO[]> = this.client.get<BooksDTO[]>(url);
    return result;
  }

  addBook(book: BooksDTO) : Observable<BooksDTO>{
    let url = this.baseUrl + "/addBook";
    let result : Observable<BooksDTO> = this.client.post<BooksDTO>(url, book);
    return result;
  }

  editBook(book: BooksDTO) : Observable<BooksDTO>{
    let url = this.baseUrl + "/editBook";
    let result : Observable<BooksDTO> = this.client.put<BooksDTO>(url, book);
    return result;
  }

  deleteBook(bookName: BooksDTO) : Observable<BooksDTO>{
    let url = this.baseUrl + "/deleteBook/" + bookName;
    let result : Observable<BooksDTO> = this.client.delete<BooksDTO>(url);
    return result;
  }

  alertForUnreturnedBook() : Observable<BookIssueDTO[]>{
    let url = this.baseUrl + "/alertForUnreturnedBooks";
    let result : Observable<BookIssueDTO[]> = this.client.get<BookIssueDTO[]>(url);
    return result;
  }

}