import { DocListPageComponent } from './Components/Doc-list-page/Doc-list-page.component';
import { MailPageComponent } from './Components/mail-page/mail-page.component';
import { Page404Component } from './Components/page404/page404.component';
import { GroupsPageComponent } from './Components/groups-page/groups-page.component';
import { AccountsPageComponent } from './Components/accounts-page/accounts-page.component';
import { NavigationPageComponent } from './Components/navigation-page/navigation-page.component';
import { AuthentificationPageComponent } from './Components/authentification-page/authentification-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {AccountService} from './Services/account.service';
import {GroupService} from './Services/group.service';
import {DocumentService} from './Services/document.service';
import { AuthentifivationService } from './Services/authentifivation.service';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginGuardService} from './Guards/Auth_Guard';
import {LoginGuardReverseService} from './Guards/Auth_Guard_Reverse';
import {MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatGridListModule,
        MAT_DATE_LOCALE} from '@angular/material';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';


// defining app routing
const appRoutes: Routes = [
  {path: '', component: NavigationPageComponent, canActivate: [LoginGuardService], pathMatch: 'full',
  children: [
    // {path: '', redirectTo: 'docs', pathMatch: 'full'},
    {path: 'mail', component: MailPageComponent},
    {path: 'groups', component: GroupsPageComponent},
    {path: 'accounts', component: AccountsPageComponent},
    {path: '', component: DocListPageComponent}
  ]},
  {path: 'login', component: AuthentificationPageComponent, canActivate: [LoginGuardReverseService]},
  {path: '**', component: Page404Component}, // Fallback route : if path not found redirect to here (should be last)
  ];

@NgModule({
  declarations: [
    AppComponent,
    MailPageComponent,
    Page404Component,
    GroupsPageComponent,
    AccountsPageComponent,
    DocListPageComponent,
    NavigationPageComponent,
    AuthentificationPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    // material design components
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    AccountService,
    GroupService,
    DocumentService,
    AuthentifivationService,
    LoginGuardService,
    LoginGuardReverseService,
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' }
    // , {provide: LocationStrategy, useClass: HashLocationStrategy} // to avoid routin problems when deploying
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
