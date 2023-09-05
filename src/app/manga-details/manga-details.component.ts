import {Component, OnInit} from '@angular/core';
import {MANGA} from "../mock-manga";
import {Manga} from "../manga";
import {MangaServiceService} from "../manga-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.css']
})
export class MangaDetailsComponent implements OnInit{

  manga: Manga|undefined;
  constructor(
      private mangaService: MangaServiceService,
      private route: ActivatedRoute
  ){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const mangaId = +params['id'];
      this.getMangaById(mangaId - 1);
    })
  }

  getMangaById(id: number){
    this.manga = this.mangaService.fetchById(id);
  }

}
