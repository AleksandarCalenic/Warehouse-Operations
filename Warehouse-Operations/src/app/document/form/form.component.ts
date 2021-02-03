import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleItem } from 'src/app/documents/model/articleList';
import { Item } from 'src/app/documents/model/item';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() articles: ArticleItem[];
  newItem: Item = new Item();
  @Output() emiter = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  pushArticle(): void{
    this.emiter.emit(this.newItem);
    this.newItem = new Item();
  }

}
