import { Document } from './../Objects/Document';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as myGlobals from '../Global/globalData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

constructor(private http: HttpClient) { }

public getDocuments(): Observable<any> {
   return this.http.get(myGlobals.getDocumentsLink);
}

public CreateDocument(document: Document) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.createDocumentLink, document)
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

public UpdateDocument(document: Document, emailIdList: number[]) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.updateDocumentLink, {document, emailIdList})
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

public DeleateDocument(id: number) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.deleateDocumentLink, {id})
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

sendMail(document: Document) {
  return new Promise((resolve, reject) => {
    this.http.post('http://' + myGlobals.ipAdress + '/juridique/gmailPost.php', document)
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

}
