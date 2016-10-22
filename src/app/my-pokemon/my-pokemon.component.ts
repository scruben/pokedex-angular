import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MyApiClientServiceService } from '../my-api-client-service.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-pokemon',
  templateUrl: './my-pokemon.component.html',
  styleUrls: ['./my-pokemon.component.css'],
  providers: [ MyApiClientServiceService ]
})
export class MyPokemonComponent implements OnInit {

  pokemon: Pokemon = new Pokemon();

  constructor(
    private route: ActivatedRoute,
    private client: MyApiClientServiceService
  ) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let pokName = params['pokemonName'];
      this.client.getPokemon(pokName)
        .then(pok => {
          this.pokemon = pok;
        }).catch(err =>
          console.log(err));
    });
  }

}
