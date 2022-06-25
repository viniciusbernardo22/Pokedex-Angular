import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';

import { pokemonService } from "./backoffice/pokemon.service"
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokemonCardComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [pokemonService],
  bootstrap: [AppComponent],
})
export class AppModule { }
