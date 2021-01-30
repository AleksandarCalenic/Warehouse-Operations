import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentsList } from '../model/documents-list';
import { DocumentItem } from '../model/document';

const url = "http://localhost:3000/api/documents/";

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  constructor(private http: HttpClient) { }

  getDocuments(params?: any): Observable<DocumentsList>{
    let querryParms = {};
    if(params){
      querryParms = {
        params: new HttpParams()
        .set('sort', params.sort || 'dateOfCreation')
        .set('sortDirection', params.sortDirection || 'desc')
        .set('page', params.page || '1')
        .set('pageSize', params.pageSize || '10')
      }
    }
    return this.http.get(url, querryParms).pipe(map(x =>{
      return new DocumentsList(x);
    }))
  }

  getDocument(id: number): Observable<DocumentItem>{
    return this.http.get(url + id).pipe(map(x =>{
      return new DocumentItem(x);
    }))
  }
}
