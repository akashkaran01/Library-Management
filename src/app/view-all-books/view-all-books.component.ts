import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { DltBtnCellRendererComponent } from '../dlt-btn-cell-renderer/dlt-btn-cell-renderer.component';
import { EditBtnCellRendererComponent } from '../edit-btn-cell-renderer/edit-btn-cell-renderer.component';
import { BooksDTO } from '../model/BooksDTO';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'view-all-books',
  templateUrl: './view-all-books.component.html',
  styleUrls: ['./view-all-books.component.css']
})
export class ViewAllBooksComponent implements OnInit {

  gridApi;
  gridColumnApi;

  books : BooksDTO[] = [];
  show: boolean = false;
  rowData  : any;
  pageSizes : number[];
  currentPageSize : number;
  frameworkComponents;
  paginationPageSize;
  domLayout;
  

  columnDefs = [
    { headerName : "Book Name", field : "bookName", width : 250 },
    { headerName : "Author Name", field: "authorName" },
    { headerName : "Published Date", field: "publishedYear", width : 120},
    { headerName: "Edit",
      field : "editButton",
      width : 70,
      cellRenderer : 'editBtnCellRenderer'
    },
    {
      headerName: "Delete",
      field: "deleteButton",
      width: 70,
      cellRenderer : "dltBtnCellRenderer"
    }
  ];

  onPageSizeChanged() {
    this.gridApi.paginationSetPageSize(this.paginationPageSize);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  
  constructor(private service : AdminService) {

    this.frameworkComponents = {
      editBtnCellRenderer : EditBtnCellRendererComponent,
      dltBtnCellRenderer : DltBtnCellRendererComponent
    }

   }
 
  ngOnInit(): void {
    let result : Observable<BooksDTO[]> = this.service.viewAllBooks();
    result.subscribe(
      (response : BooksDTO[])=>{
        this.books = response;
        this.show = true;
        this.rowData = response;
      },
      (error : Response)=>{
        alert(error['error']['message']);
        console.log("Error : ",error['error']['message']);
      }
    );
    this.paginationPageSize=5;
    this.pageSizes = [5,8,10,13];
    this.domLayout='autoHeight';
    
  }
}

