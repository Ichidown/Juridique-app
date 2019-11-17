import { Account } from './../../Objects/Account';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.css']
})
export class AccountsPageComponent implements OnInit {

  constructor(private _accountService: AccountService) { }
  private account: Account = new Account(0, '', '', '');
  private accountList: Account[];
  private selectedAccount = -1;

  ngOnInit() {
    this.loadAccountList();
  }

  loadAccountList() {
    this._accountService.getAccounts().subscribe(res => {
      if (res.toString().substring(0, 2) !== 'E-') {
        this.accountList = res;
      } else {
        console.log(res); // error connecting to database
      }
    });
  }

  onSelectedUser(index: number) {
    this.selectedAccount = index;
    (<HTMLInputElement>document.getElementById('inputEmail')).value = this.accountList[index].Email;
    (<HTMLInputElement>document.getElementById('inputName')).value = this.accountList[index].Name;
    (<HTMLInputElement>document.getElementById('inputLastName')).value = this.accountList[index].LastName;
  }

  onCreateUser() {
    this.account.softSet(
      (<HTMLInputElement>document.getElementById('inputEmail')).value,
      (<HTMLInputElement>document.getElementById('inputName')).value,
      (<HTMLInputElement>document.getElementById('inputLastName')).value);

    this._accountService.CreateAccount(this.account).then((res) => {
      if (+res.toString()) {
        this.account.ID = +res.toString(); // + : to convert string to int
        this.accountList.push(this.account.duplicate()); // update type list content with updated post
        console.log('account created ');
      } else { console.log(res.toString()); }
    });
  }

  private onUpdateUser() {
    this.account.Set(
      this.accountList[this.selectedAccount].ID,
      (<HTMLInputElement>document.getElementById('inputEmail')).value,
      (<HTMLInputElement>document.getElementById('inputName')).value,
      (<HTMLInputElement>document.getElementById('inputLastName')).value);

    this._accountService.UpdateAccount(this.account).then((res) => {
      if (res === 1) {
        this.accountList[this.selectedAccount] = this.account.duplicate(); // update type list content with updated post
        console.log('modifié avec succès');
      } else { console.log(res); }
    });
  }

  onDeleateUser() {
    if (this.selectedAccount !== -1) {
      this._accountService.DeleateAccount(this.accountList[this.selectedAccount].ID).then((res) => {
        if (res.toString().substring(0, 2) !== 'E-' && res != null) {
          this.accountList.splice(this.selectedAccount, 1); // remove deleated post from postList
          this.selectedAccount = -1;
          console.log('deleated successfully');
        } else {
          console.log('item not found');
        }
      }).catch((err) => {
          console.log('deleate error : E-550');
      });
    }
  }

}
