import { Component, OnInit } from '@angular/core';
import { AuthentifivationService } from 'src/app/Services/authentifivation.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authentification-page',
  templateUrl: './authentification-page.component.html',
  styleUrls: ['./authentification-page.component.css']
})
export class AuthentificationPageComponent implements OnInit {


  constructor(private _authentifivationService: AuthentifivationService, private router: Router) { }

  ngOnInit() {
  }

  requestAuth(Email: string, password: string) {
    this._authentifivationService.getUserDetails(Email, password).then((res: any) => {
      if (res.toString().substring(0, 2) !== 'E-') { // login successful : no errors
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(res));
        // redirect user to admin page
        this.router.navigate(['/']);
        // console.log(res.toString().substring(0, 2));
        // console.log(res.toString());
      } else { // login failed
        console.log(JSON.stringify(res));
      }
    }).catch((err) => {
      // redirect to login page
      this.router.navigate(['/login']);
      console.log(err);
    });
  }

}
