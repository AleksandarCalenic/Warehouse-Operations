import { Component, Input, OnChanges, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

  @Input() totalItems: number;
  @Input() page: number;
  @Input() pageSize: number;
  @Output() emiter = new EventEmitter();
  pageCounter: number;
  pages:number[];
  currentPage: number

  constructor() { }

  ngOnInit(): void {
    this.currentPage = 1;
  }

  ngOnChanges(): void {
    //calculate total page
    this.pageCounter = Math.ceil(this.totalItems / this.pageSize);
    //make Array, help to display all pages
    this.pages = new Array(this.pageCounter);
  }

  changePage(value){
    this.currentPage = value;
    this.emiter.emit({'page': this.currentPage})
  }

}
