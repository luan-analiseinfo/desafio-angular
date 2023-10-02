import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getCharacters(page: number, pageSize: number): Observable<any> {
    const url = `${this.apiUrl}/characters?page=${page}&pageSize=${pageSize}`;
    return this.http.get(url);
  }
}
