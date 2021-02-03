import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DocumentsList } from '../model/documents-list';
import { DocumentItem } from '../model/document';
import { ArticleItem, ArticleList } from '../model/articleList';
import { ItemList } from '../model/itemList';
import { Item } from '../model/item';

const url = "http://localhost:3000/api/documents/";
const articleUrl = "http://localhost:3000/api/articles";

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

  getArticleList(): Observable<ArticleList>{
    return this.http.get(articleUrl).pipe(map(x =>{
      return new ArticleList(x);
    }))
  }

  getItems(id:number): Observable<ItemList>{
    return this.http.get(url + id + "/items").pipe(map(x =>{
      return new ItemList(x);
    }))
  }

  postArticle(item: Item): Observable<Item>{
    return this.http.post(url + item.documents + "/items", item).pipe(map(x =>{
      return new Item(x);
    }))
  }

  putDocuments(document: DocumentItem): Observable<DocumentItem>{
    return this.http.put(url + document._id, document).pipe(map(x =>{
      return new DocumentItem(x);
    }))
  }
}
