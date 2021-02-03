import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleItem, ArticleList } from '../documents/model/articleList';
import { DocumentItem } from '../documents/model/document';
import { Item } from '../documents/model/item';
import { ItemList } from '../documents/model/itemList';
import { DocumentsService } from '../documents/service/documents.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  id: number;
  document: DocumentItem;
  articles: ArticleList;
  item: Item = new Item();
  itemList: ItemList;
  items: Item[];

  constructor(private router: ActivatedRoute, private servise: DocumentsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(res =>{
      this.id = res['id'];
      this.servise.getDocument(this.id).subscribe(res =>{
        this.document = res;
        this.getArticles();
        this.getItems();
      })
    });
  }

  getArticles(): void{
    this.servise.getArticleList().subscribe(res =>{
      this.articles = res;
      console.log(this.articles);
    })
  }

  getItems(): void{
    this.servise.getItems(this.id).subscribe(res =>{
      this.itemList = res;
      this.items = res.results.map(item =>{
        return this.mapArticle(item);
      })
    })
  }

  pushArticle(value: Item): void{
    this.item = value;
    this.item.documents = this.document._id;
    this.servise.postArticle(this.item).subscribe();
  }

  mapArticle(item: Item): Item{
    for(let i = 0; i < this.articles.results.length; i++){
      if(this.articles.results[i].code == item.article){
        item.article = this.articles.results[i].name;
        return item;
      }
    }
  }


}
