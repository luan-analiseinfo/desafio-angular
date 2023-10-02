import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    CharacterComponent
  ],
  exports: [CharacterComponent],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule
  ]
})
export class CharacterModule { }
