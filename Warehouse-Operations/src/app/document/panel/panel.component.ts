import { Component, Input, OnInit } from '@angular/core';
import { DocumentItem } from 'src/app/documents/model/document';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  @Input() document: DocumentItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
