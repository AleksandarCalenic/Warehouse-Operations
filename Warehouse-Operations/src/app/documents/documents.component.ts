import { Component, OnInit } from '@angular/core';
import { DocumentsList } from './model/documents-list';
import { DocumentsService } from './service/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  documentsList: DocumentsList;
  parameters = {
    sort: 'dateOfCreation',
    sortDirection:'desc',
    page: 1,
    pageSize: 10
  }

  showSettings: boolean = false;

  constructor(private service: DocumentsService) { }

  ngOnInit(): void {
    this.getDocumentsList();
  }

  getDocumentsList(params?: any): void{
    //checking is the search have new parameters
    if(params){
      this.parameters.sort = params.sort || this.parameters.sort;
      this.parameters.sortDirection = params.sortDirection || this.parameters.sortDirection;
      this.parameters.page = params.page || this.parameters.page;
      this.parameters.pageSize = params.pageSize || this.parameters.pageSize;
    }
    this.service.getDocuments(this.parameters).subscribe(res =>{
      this.documentsList = res;
    })
  }

  changeSort(value: string){
    //checking if the col allready set as sort
    if(this.parameters.sort == value){
      //if is, change sortDirection
      if(this.parameters.sortDirection == 'desc'){
        this.parameters.sortDirection = 'asc';
      } else {
        this.parameters.sortDirection = 'desc';
      }
    } 
      //if the col is not set as sort, take this col as sort and do sortDirection 'desc' as default
      else {
        this.parameters.sort = value;
        this.parameters.sortDirection = 'desc';
    }
    //refresh page to make change on screen
    this.getDocumentsList();
  }

}
