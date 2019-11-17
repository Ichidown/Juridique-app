import {Component, OnInit} from '@angular/core';
import { Document } from '../../Objects/Document';
import {DocumentService} from '../../Services/document.service';


@Component({
  selector: 'app-mail-page',
  templateUrl: './mail-page.component.html',
  styleUrls: ['./mail-page.component.css']
})
export class MailPageComponent implements OnInit {


  private document: Document = new Document(0, '', '', '', '', '', '', '', '', '', '');

  constructor(private _documentService: DocumentService) {  }

  ngOnInit() {
  }

  saveMailDocument(
    // FromEmail: string,
    // ToEmail: string,
    Title: string,
    Reference: string,
    Origin: string,
    Risks: string,
    Resume: string,
    Mesures: string,
    EstablishedBy: string,
    NameResp: string,
    DateEd: string) {

    // this.document.reset(); // empty Object

    // this.document.fromEmail = FromEmail;
    // this.document.toEmail = ToEmail;
    this.document.title = Title;
    this.document.Reference = Reference;
    this.document.Origin = Origin;
    this.document.Risks = Risks;
    this.document.Resume = Resume;
    this.document.Mesures = Mesures;
    this.document.EstablishedBy = EstablishedBy;
    this.document.NameResp = NameResp;
    this.document.Date = DateEd;


    this._documentService.CreateDocument(this.document).then((res) => {
      if (+res.toString()) {
        this.document.ID = +res.toString(); // + : to convert string to int
        console.log('document created ');
      } else { console.log(res.toString()); }
    });

  }
}
