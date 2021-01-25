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
    sortDirection:'asc',
    page: 1,
    pageSize: 10
  }

  constructor(private service: DocumentsService) { }

  ngOnInit(): void {
    this.getDocumentsList();
  }

  getDocumentsList(params?: any): void{
    if(params){
      this.parameters.sort = params.sort || this.parameters.sort;
      this.parameters.sortDirection = params.sortDirection || this.parameters.sortDirection;
      this.parameters.page = params.page || this.parameters.page;
      this.parameters.pageSize = params.pageSize || this.parameters.pageSize;
    }
    this.service.getDocuments(this.parameters).subscribe(res =>{
      this.documentsList = res;
      console.log(this.documentsList.results);
    })
  }

}
