import { Component } from '@angular/core';
import { pokemonService } from '../backoffice/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {
  search: any = ""
  constructor(public pokemonService: pokemonService) { }
}
