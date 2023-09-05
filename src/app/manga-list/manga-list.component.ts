import { Component } from '@angular/core';
import {Manga} from "../manga";
import {MANGA} from "../mock-manga";
import {MangaServiceService} from "../manga-service.service";

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css']
})
export class MangaListComponent {

  mangaList: Manga[] = MANGA;
  mangaListService: Manga[] = [];
  manga!: Manga;


  constructor(
      private service:MangaServiceService
  ){}
  getManga(){
    this.mangaListService = this.service.fetchAllManga();
    return this.mangaListService;
  }




}
