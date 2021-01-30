import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocumentItem } from '../documents/model/document';
import { DocumentsService } from '../documents/service/documents.service';


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  id: number;
  document: DocumentItem;

  constructor(private router: ActivatedRoute, private servise: DocumentsService) { }

  ngOnInit(): void {
    this.router.params.subscribe(res =>{
      this.id = res['id'];
      this.servise.getDocument(this.id).subscribe(res =>{
        this.document = res;
        console.log(this.document)
      })
    })
  }

}
