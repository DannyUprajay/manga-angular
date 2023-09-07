import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "./iuser";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url= "https://jsonplaceholder.typicode.com/users";
  constructor(private serviceHttpClient : HttpClient) { }

  fetchAllUsers(){
    return this.serviceHttpClient.get<IUser[]>(this.url);
  }

  fetchById(id: number){
    return this.serviceHttpClient.get<IUser>(this.url+'/' +id);
  }

}
