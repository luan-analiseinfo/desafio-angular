import {Component, OnInit} from '@angular/core';
import { CharacterService } from './character.service';
import {Character} from "./model/character.model";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  characters: Character[] = [];
  page = 0;
  pageSize = 10;
  totalItems = 0;

  constructor(
    private characterService: CharacterService
  ) {}

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getCharacters(this.page, this.pageSize).subscribe(data => {
      if (data) {
        this.characters = data.items || [];
        this.page = data.page;
        this.totalItems = data.totalItems;
        this.pageSize = data.pageSize;
      }
    });
  }

  nextPage(): void {
      this.page++;
      this.loadCharacters();
  }

  previousPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadCharacters();
    }
  }

}
