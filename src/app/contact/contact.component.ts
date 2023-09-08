import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  messageName:string= "";
  messageMdp:string= "";
  onSubmit(form: NgForm){

    if(form.valid){
      if(form.value.nom.length < 5 || form.value.nom == ""){
        this.messageName = "‍☠"
      }
      if(form.value.nom.length > 5){
        this.messageName = "👍"
      }
      if(form.value.password.length < 6 || form.value.password == ""){
        this.messageMdp = "‍☠"
      }
      if(form.value.password.length > 6){
        this.messageMdp = "👍"
      }

    }

    form.reset();

  }



}
