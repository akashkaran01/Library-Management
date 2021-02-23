import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AlertForUnreturnedBooksComponent } from './alert-for-unreturned-books/alert-for-unreturned-books.component';
import { ApprovalComponent } from './approval/approval.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';

const routes: Routes = [
  {
    path: '',
    component : HomeComponent
  },
  {
    path: 'user/register',
    component : RegistrationComponent
  },
  {
    path: 'user/login',
    component : LoginComponent
  },
  {
    path: 'user/issueBooks',
    component : BookIssueComponent
  },
  {
    path: 'admin/userApproval',
    component : ApprovalComponent
  },
  {
    path: 'admin/login',
    component : AdminLoginComponent
  },
  {
    path: 'admin/viewAllBooks',
    component : ViewAllBooksComponent
  },
  {
    path: 'admin/alertForUnreturnedBooks',
    component : AlertForUnreturnedBooksComponent
  },
  {
    path: 'admin/addBook',
    component : AddBookComponent
  },
  {
    path: 'admin/editBook',
    component : EditBookComponent
  },
  {
    path: 'admin/deleteBook',
    component : DeleteBookComponent
  },
  {
    path: '**',
    component : NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
