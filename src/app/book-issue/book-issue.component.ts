import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { RowNode } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BookIssueDTO } from '../model/BookIssueDTO';
import { BooksDTO } from '../model/BooksDTO';
import { DataService } from '../service/data.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'book-issue',
  templateUrl: './book-issue.component.html',
  styleUrls: ['./book-issue.component.css']
})
export class BookIssueComponent implements OnInit {

  @ViewChild('agGrid') agGrid : AgGridAngular;

  show : boolean=false;
  rowData  : any;
  paginationPageSize ;
  domLayout;
  currentDate = new Date();
  bookIssueDate : Date;
  bookReturnDate : Date;

  columnDefs = [
    { headerName : "Book Name", field : "bookName", sortable : true, filter : true, 
    checkboxSelection : true, width : 250 },
    { headerName : "Author Name", field: "authorName" },
    { headerName : "Published Date", field: "publishedYear", width : 120}
  ];

  constructor(private service : UserService, private dataService : DataService) { 
  }

  ngOnInit(): void {
    let result : Observable<BooksDTO[]> = this.service.listOfBooks();
    result.subscribe(
      (response : BooksDTO[])=>{
        this.show = true;
        this.rowData = response;
      },
      (error : Response)=>{
        console.log(error['error']['message']);
      }
    );
    this.paginationPageSize=8;
    this.domLayout = 'autoHeight';
  }

  counter = 0;
  limitCheckboxSelection(params){
    if(params.target.checked==true){
      if(this.counter < 3){
        this.counter++;
      }else{
        alert("You can issue max 3 books at a time.");
        
        const selectedNode = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNode.map(node => node.data );
        let l = selectedNode.length;
        //console.log("Selected Data",selectedData);
        //console.log("Selected Node length : ",l);
        //console.log(selectedNode[l-1]);
        //let selectedBooks : RowNode[] = selectedNode;
        //selectedData.pop();
        //event.target.checked=false;
        this.agGrid.api.deselectNode(selectedNode[l-1]);
        selectedNode.pop();
        //console.log("AFter deselectingNode : ", selectedNode);
        //console.log("afte deselecting Node remaining data : ",selectedData);
        selectedData.pop();
        //console.log("After popping Selected Data :",selectedData);
        //console.log(event);
      }
    }else if(params.target.checked==false){
      this.counter--;
      //console.log("DECREMENT : ",this.counter);
      //console.log(event);
    }
  }

  issueBook(bookIssueForm){
    let username : string = this.dataService.sharedData;
    let issueDate : Date = bookIssueForm.value.issueDate;
    let returnDate : Date = bookIssueForm.value.returnDate;
    let selectedBooks : BooksDTO[] = [];

    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data );
    selectedBooks = selectedData;

    let bookIssue = new BookIssueDTO(username, issueDate, returnDate, selectedBooks);

    console.log("Book Issue obj : ",bookIssue);
    
    let result : Observable<BookIssueDTO> = this.service.issueBooks(bookIssue);
    result.subscribe(
      (response : BookIssueDTO)=>{
        alert(response.serverResponse);
      },
      (error : Response)=>{
        alert(error['error']['message']);
        console.log("Error",error);
      }
    );
    this.agGrid.api.deselectAll();
    bookIssueForm.reset();
    
  }



}
