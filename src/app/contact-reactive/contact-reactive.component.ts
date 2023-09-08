import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Manga} from "../manga";
import {MANGA} from "../mock-manga";

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent {

  mangaList: Manga[] = MANGA;


  public form: FormGroup = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    id: new FormControl(''),
    // image: new FormControl('')
  });

  onSubmit(){
    // this.manga.title = this.form.value.title;
    // console.log(this.manga.title);
    // this.manga.author = this.form.value.author;
    // this.manga.description = this.form.value.description;
    let manga = {
      'id' : 0,
      'title': '',
      'author': '',
      'description': '',
      'image': ''
    };
    if(this.form.valid){
      let lastIndex = MANGA.length - 1;
      let lastId = MANGA[lastIndex].id;
      manga = {
        'id': lastId + 1,
        'title': this.form.value.title,
        'author': this.form.value.author,
        'description': this.form.value.description,
        'image': this.form.value.image
      };
      this.mangaList.push(manga);
      console.log(manga);
      console.log(this.mangaList);
    // this.manga[title] = this.form.value.title
    //   console.log(test)
    //  this.mangaList.push(this.manga);
      // console.log(this.form.value.title);
      // console.log(this.form.get("password")?.value)
    }else{
      console.log('nono');
    }
  }

}
