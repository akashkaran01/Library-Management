import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { DataService } from '../service/data.service';

@Component({
  selector: 'edit-btn-cell-renderer',
  templateUrl: './edit-btn-cell-renderer.component.html',
  styleUrls: ['./edit-btn-cell-renderer.component.css']
})
export class EditBtnCellRendererComponent implements AgRendererComponent  {

   params : any;
  

  constructor(private dataService: DataService, private router: Router) { }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
    
  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  editBtnClickedHandler(params){
    console.log(this.params);
    this.dataService.sharedData = this.params.data.bookName;
    this.router.navigateByUrl('admin/editBook');
    
  }
  
}
