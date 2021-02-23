import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { UserService } from './service/user.service';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewAllBooksComponent } from './view-all-books/view-all-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AdminService } from './service/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { ApprovalComponent } from './approval/approval.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BookIssueComponent } from './book-issue/book-issue.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { AlertForUnreturnedBooksComponent } from './alert-for-unreturned-books/alert-for-unreturned-books.component';
import { EditBtnCellRendererComponent } from './edit-btn-cell-renderer/edit-btn-cell-renderer.component';
import { DltBtnCellRendererComponent } from './dlt-btn-cell-renderer/dlt-btn-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AdminLoginComponent,
    ViewAllBooksComponent,
    AddBookComponent,
    EditBookComponent,
    DeleteBookComponent,
    ApprovalComponent,
    HomeComponent,
    NotFoundComponent,
    BookIssueComponent,
    UserNavbarComponent,
    AdminNavbarComponent,
    HomeNavbarComponent,
    AlertForUnreturnedBooksComponent,
    EditBtnCellRendererComponent,
    DltBtnCellRendererComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgGridModule.withComponents([EditBtnCellRendererComponent, DltBtnCellRendererComponent])
  ],
  providers: [UserService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
