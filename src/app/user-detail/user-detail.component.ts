import {Component, Input} from '@angular/core';
import {IUser} from "../iuser";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  @Input() userEnfant:  IUser| undefined;


}
