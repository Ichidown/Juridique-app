import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as myGlobals from '../Global/globalData';

@Injectable({
  providedIn: 'root'
})
export class AuthentifivationService {

  constructor(private http: HttpClient) { }

  sendMail(Email: string, Password: string) {
    console.log(Email + '  ' + Password);
  }

  // post username & password to Api server & returns full username if verified else return ""
  getUserDetails(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http.post('http://' + myGlobals.ipAdress + '/juridique/login.php', {email, password})
        .toPromise().then(
          data => resolve(data), err => reject(err)
        );
    });
  }

}
