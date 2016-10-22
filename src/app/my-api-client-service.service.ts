import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Pokemon } from './pokemon';

@Injectable()
export class MyApiClientServiceService {

  private baseURL: string = "http://pokeapi.co/api/v2/"

  constructor(private http: Http) {  }

  getPokemonCollection(index: string): Promise<string[]> {
    return this.http.get(`${this.baseURL}pokedex/${index}/`)
      .toPromise()
      .then(response => {
        return response.json().pokemon_entries.map(entry => entry.pokemon_species.name);
      })
      .catch(err => console.log(err));
  }

  getPokemon(index: string): Promise<Pokemon> {
    return this.http.get(`${this.baseURL}pokemon/${index}`)
      .toPromise()
      .then(response => {
        return Pokemon.parse(response.json());
      })
      .catch(err => console.log(err));
  }

}
