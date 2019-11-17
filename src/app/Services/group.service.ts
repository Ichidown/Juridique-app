import { Group } from './../Objects/Group';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as myGlobals from '../Global/globalData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

constructor(private http: HttpClient) { }

public getGroups(): Observable<any> {
   return this.http.get(myGlobals.getGroupsLink);
}

public CreateGroup(group: Group, emailIdList: number[]) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.createGroupLink, {group, emailIdList})
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

public UpdateGroup(group: Group, emailIdList: number[]) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.updateGroupLink, {group, emailIdList})
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

public DeleateGroup(id: number) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.deleateGroupLink, {id})
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

public getGroupEmails(id: number) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.getGroupEmailsLink, {id})
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}
}
