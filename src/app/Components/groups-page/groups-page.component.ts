import { GroupService } from './../../Services/group.service';
import { Account } from './../../Objects/Account';
import { Group } from './../../Objects/Group';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/Services/account.service';

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css']
})
export class GroupsPageComponent implements OnInit {

  private group: Group = new Group(0, '', '');
  private groupList: Group[];
  private accountList: Account[];
  private accountsSelectionList: Boolean[] = [];
  private accountsSelectionIdList: number[];
  private selectedGroup = -1;

  constructor(private _groupService: GroupService, private _accountService: AccountService) { }

  ngOnInit() {
    this.loadGroupList();
    this.loadAccountList();
  }

  loadGroupList() {
    this._groupService.getGroups().subscribe(res => {
      if (res.toString().substring(0, 2) !== 'E-') {
        this.groupList = res;
      } else {
        console.log(res); // error connecting to database
      }
    });
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

  onSelectedGroup(index: number) {

    this.selectedGroup = index;
    (<HTMLInputElement>document.getElementById('inputGroupName')).value = this.groupList[index].Name;
    (<HTMLInputElement>document.getElementById('inputResponsible')).value = this.groupList[index].Responsible;

    // clear checked emails before refill
    this.accountsSelectionList = [];

    // get group related emails
    this._groupService.getGroupEmails(this.groupList[this.selectedGroup].ID).then((res) => {
      if (res.toString().substring(0, 2) !== 'E-' && res != null) {
        for (let i = 0; i < this.accountList.length; i++) {
          (res as any[]).forEach(accountId2 =>  {
            if (this.accountList[i].ID === accountId2.id_email) {
              this.accountsSelectionList[i] = true;
            }
          });
        }
      }
    }).catch((err) => {console.log(err); });
  }

  onSelectedAccount(index: number) {
    this.accountsSelectionList[index] = !this.accountsSelectionList[index];
    // console.log(this.accountsSelectionList[index]);
  }

  onCreateGroup() {
    this.group.softSet(
      (<HTMLInputElement>document.getElementById('inputGroupName')).value,
      (<HTMLInputElement>document.getElementById('inputResponsible')).value);

    this.getCheckedEmailIdList();
    this._groupService.CreateGroup(this.group, this.accountsSelectionIdList).then((res) => {
      if (+res.toString()) {
        this.group.ID = +res.toString(); // + : to convert string to int
        this.groupList.push(this.group.duplicate()); // update type list content with updated post
        console.log('group created ');
      } else { console.log(res.toString()); }
    });
  }

  onUpdateGroup() {
    this.group.Set(
      this.groupList[this.selectedGroup].ID,
      (<HTMLInputElement>document.getElementById('inputGroupName')).value,
      (<HTMLInputElement>document.getElementById('inputResponsible')).value);

    this.getCheckedEmailIdList();
    this._groupService.UpdateGroup(this.group, this.accountsSelectionIdList).then((res) => {
      if (res === 1) {
        this.groupList[this.selectedGroup] = this.group.duplicate(); // update type list content with updated post
        console.log('modifié avec succès');
      } else { console.log(res); }
    });
  }

  onDeleateGroup() {
    if (this.selectedGroup !== -1) {
      this._groupService.DeleateGroup(this.groupList[this.selectedGroup].ID).then((res) => {
        if (res.toString().substring(0, 2) !== 'E-' && res != null) {
          this.groupList.splice(this.selectedGroup, 1); // remove deleated post from postList
          this.selectedGroup = -1;
          console.log('deleated successfully');
        } else {
          console.log('item not found');
        }
      }).catch((err) => {
          console.log('deleate error : E-550');
      });
    }
  }

  getCheckedEmailIdList() { // return list of checked emails
    this.accountsSelectionIdList = []; // clear array
    for (let idx = 0; idx < this.accountsSelectionList.length; idx++) {
      if (this.accountsSelectionList[idx]) { this.accountsSelectionIdList.push(this.accountList[idx].ID); }
    }
  }

}
