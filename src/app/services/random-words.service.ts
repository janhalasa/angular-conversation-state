import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: "root"})
export class RandomWordsService {

  constructor(private http: HttpClient) {
  }

  loadRandomWords(count: number): Observable<string[]> {
    return this.http.get<string[]>('https://random-word-api.herokuapp.com/word?number=' + count);
  }
}
