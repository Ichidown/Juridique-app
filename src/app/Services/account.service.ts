import { Account } from './../Objects/Account';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as myGlobals from '../Global/globalData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

constructor(private http: HttpClient) { }

getAccounts(): Observable<any> {
  return this.http.get(myGlobals.getAccountsLink);
}

public CreateAccount(account: Account) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.createAccountLink, account)
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

UpdateAccount(account: Account) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.updateAccountLink, account)
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

public DeleateAccount(id: number) {
  return new Promise((resolve, reject) => {
    this.http.post(myGlobals.deleateAccountLink, {id})
      .toPromise().then(
        data => resolve(data), err => reject(err)
      );
  });
}

}
