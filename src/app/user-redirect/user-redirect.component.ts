import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {IUser} from "../iuser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-redirect',
  templateUrl: './user-redirect.component.html',
  styleUrls: ['./user-redirect.component.css']
})
export class UserRedirectComponent implements OnInit{

  user: IUser | undefined;
  constructor(private service: UserService, private route:ActivatedRoute) {
  }

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.service.fetchById(params["id"]).subscribe(data =>{
        this.user=data;
        return this.user;
      })
    })
  }



}
