import { Component, OnInit } from '@angular/core';
import {DocumentService} from '../../Services/document.service';
import { Document } from './../../Objects/Document';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-Doc-list-page',
  templateUrl: './Doc-list-page.component.html',
  styleUrls: ['./Doc-list-page.component.css']
})
export class DocListPageComponent implements OnInit {

  private documentList: Document[];

  constructor(private _documentService: DocumentService) { }

  ngOnInit() {
  }

  loadDocumentList() {
    this._documentService.getDocuments().subscribe(res => {
      if (res.toString().substring(0, 2) !== 'E-') {
        this.documentList = res;
      } else {
        console.log(res); // error connecting to database
      }
    });
  }

  // this.documentList.push(this.document.duplicate()); // update list content with updated post

  private onRowClicked(selectedIndex: number) {
    console.log('ho hey : ' + selectedIndex);
  }

  private sendMailToGroup() {
    /*this._clientToolsService.sendMail(this.document).then((res) => {
      console.log(res.toString());
      if (res.toString() === '1') {
        console.log('email sent');
      } else { console.log(res.toString()); }
    });*/
  }
}
