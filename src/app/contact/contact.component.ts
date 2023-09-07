import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nom ="bonjour"
  onSubmit(form: any){

    console.log(form.value);
    form.reset();
    if(form.value.nom.length < 5){
      console.log("nop")
      console.log( form.value.length)
    }else if(form.value.nom.length > 5){
      console.log("yes")
    }
  }

}
