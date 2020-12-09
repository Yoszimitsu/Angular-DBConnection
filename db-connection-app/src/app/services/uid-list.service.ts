import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UidListService {

  // tslint:disable-next-line:ban-types
  uidArray: string[];

  constructor() {
    this.uidArray = [
      '1zaq',
      '2xsw',
      '3cde',
      '4vfr',
      '5bgt',
      '6nhy',
      '7mju',
      '8mki',
      '9mnb',
      '0qwe'
    ];
  }

  // tslint:disable-next-line:typedef ban-types
  public getUid(): string {
    return this.uidArray[Math.round((Math.random() * 14))];
  }

}
