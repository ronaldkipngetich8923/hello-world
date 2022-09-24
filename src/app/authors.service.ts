import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  getauthors(){
    return ["Author1", "author2", "Author3"];
  }
  constructor() { }
}
