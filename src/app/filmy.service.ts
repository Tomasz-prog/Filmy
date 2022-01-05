import { Injectable } from '@angular/core';
import { Film } from './modele/film'; 


@Injectable({
  providedIn: 'root'
})
export class FilmyService {
  
  private filmy: Film [] = [{id:0, tytul: "titanic", opis: "film o morsowaniu", rok: 1997},
                    {id:1, tytul: "terminator", opis: "film o elektronicznym zabójcy", rok: 1985},
                    {id:2, tytul: "avatar", opis: "film o avatarach", rok: 2010}  
];

  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  getFilm(id: number): Film {
    return this.filmy[id];
  }

}
