import {Component, OnInit} from '@angular/core';
import {UidService} from "../../services/uid.service";
import {UidListService} from "../../services/uid-list.service";

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  uid: string;
  updated = false;

  uidObject = {
    uid: '',
    counter: 0,
  };

  result = {
    uid: '',
    counter: 0,
  };

  constructor(
    private uidService: UidService,
    private uidList: UidListService
  ) {
  }

  ngOnInit(): void {
    this.uid = this.uidList.getUid();
    this.getUid(this.uid);
  }

  getUid(uid: string) {
    this.uidService.get(uid)
      .subscribe(
        data => {
          if (!data) {
            this.uidObject.uid = this.uid;
            this.uidObject.counter = 1;
            this.addUid(this.uidObject.uid, this.uidObject);
          } else if (!this.updated) {
            this.uidObject.uid = data['uid'];
            this.uidObject.counter = data['counter'] + 1
            this.updateUid(data['uid'], this.uidObject);
          } else {
            this.result.uid = data['uid'];
            this.result.counter = data['counter'];
          }
        },
        error => {
          console.log(error);
        });
  };

  addUid(uid: string, uidObject: Object) {
    this.uidService.create(uid, uidObject)
      .subscribe(
        response => {
          console.log("The Uid was added successfully!");
          this.result.uid = this.uidObject.uid;
          this.result.counter = this.uidObject.counter;
        },
        error => {
          console.log(error);
        });
  }

  updateUid(uid: string, uidObject: Object) {
    this.uidService.update(uid, uidObject)
      .subscribe(
        response => {
          console.log('The Uid was updated successfully!');
          this.updated = true;
          this.getUid(this.uidObject.uid)
        },
        error => {
          console.log(error);
        });
  }
}
