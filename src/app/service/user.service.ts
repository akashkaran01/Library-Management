import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserDTO } from '../model/UserDTO';
import {throwError as observableThrowError,  Observable ,  Observer } from 'rxjs';
import { BooksDTO } from '../model/BooksDTO';
import { BookIssueDTO } from '../model/BookIssueDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  client : HttpClient;
  constructor(client:HttpClient) {
    this.client = client;
  }

  private baseUrl="http://localhost:8085/user";

  registration(user: UserDTO) : Observable<UserDTO>{
    let url = this.baseUrl + "/registerUser";
    /*
    let userObj = {
      "username" : user.username,
      "password" : user.password,
      "firstName" : user.firstName,
      "lastName" : user.lastName,
      "mob_No" : user.mob_No,
      "dob" : user.dob,
      "approved" : user.approved,
      "email" : user.email,
      "serverResponse" : user.serverResponse
    };
    let result : Observable<UserDTO> = this.client.post<UserDTO>(url, userObj);
    */
    let result : Observable<UserDTO> = this.client.post<UserDTO>(url, user);
    return result;
  }

  validation(username: string, password: string) : Observable<UserDTO>{
    let url = this.baseUrl + "/validate/" + username + "/" + password;
    let result : Observable<UserDTO> = this.client.get<UserDTO>(url);
    return result;
  }

  listOfBooks() : Observable<BooksDTO[]>{
    let url = this.baseUrl + "/issueBooks";
    let result : Observable<BooksDTO[]> = this.client.get<BooksDTO[]>(url);
    return result;
  }

  issueBooks(bookIssueDto : BookIssueDTO) : Observable<BookIssueDTO>{
    let url = this.baseUrl + "/issueBooks";
    //let jsonObj = JSON.stringify(bookIssueDto);
    //let result : Observable<BookIssueDTO> = this.client.post<BookIssueDTO>(url, jsonObj);
    // let bookIssueObj = {};
    // bookIssueObj['username'] = bookIssueDto.username;
    // bookIssueObj['issueDate'] = bookIssueDto.issueDate;
    // bookIssueObj['returnDate'] = bookIssueDto.returnDate;

    let bookIssueObj=
    {
      "userName" : bookIssueDto.userName,
      "issueBookDate" : bookIssueDto.issueBookDate,
      "returnBookDate" : bookIssueDto.returnBookDate,
      "book" : bookIssueDto.books
   };
    let result : Observable<BookIssueDTO> = this.client.post<BookIssueDTO>(url, bookIssueObj);
    return result;
  }
}
