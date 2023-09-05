import { Injectable } from '@angular/core';
import {MANGA} from "./mock-manga";
import {Manga} from "./manga";

@Injectable({
  providedIn: 'root'
})
export class MangaServiceService {

  constructor() { }

  fetchAllManga() {
  return MANGA;
  }

  fetchById(id: number): Manga|undefined {
    return MANGA[id];
  }


}
