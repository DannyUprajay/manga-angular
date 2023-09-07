import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../iuser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  users:IUser[] = [];
  userParent:IUser|undefined;
  constructor(private service: UserService) {
  }
  ngOnInit(){
    this.getUser();
    console.log("marche");
  }


  getUser(){
    this.service.fetchAllUsers().subscribe(data =>{
      this.users=data;
      console.log(this.users);

    });
  }

  selectUser(user: IUser){
    this.userParent = user;
  }

  getUserId(id: any){
    return this.service.fetchById(id);
  }


}
