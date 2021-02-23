import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BooksDTO } from '../model/BooksDTO';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-dlt-btn-cell-renderer',
  templateUrl: './dlt-btn-cell-renderer.component.html',
  styleUrls: ['./dlt-btn-cell-renderer.component.css']
})
export class DltBtnCellRendererComponent implements AgRendererComponent {

  params: any;
  gridApi : any;

  constructor(private adminService: AdminService) { }

  refresh(params: ICellRendererParams): boolean {
    //this.gridApi.refreshCells({force:true});
    return true;
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
    console.log(this.params);
    this.gridApi = params.api;
    console.log(this.gridApi);
  }
  
  dltBtnClickedHandler(params){
    //this.adminService.deleteBook(this.params.data.bookName);
    let bookName = this.params.data.bookName;
    let result : Observable<BooksDTO> = this.adminService.deleteBook(bookName);
    result.subscribe((response:BooksDTO)=>{
      alert(response.serverResponse);
    },
    (error:Response)=>{
      alert(error['error']['message']);
      console.log("Error",error);
    });
  }

}
