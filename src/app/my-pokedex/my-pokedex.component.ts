import { Component, OnInit } from '@angular/core';

import { MyApiClientServiceService } from '../my-api-client-service.service';

@Component({
  selector: 'app-my-pokedex',
  templateUrl: './my-pokedex.component.html',
  styleUrls: ['./my-pokedex.component.css'],
  providers: [ MyApiClientServiceService ]
})
export class MyPokedexComponent implements OnInit {

  pokemons: string[];

  constructor(private list: MyApiClientServiceService) { }

  ngOnInit() {
    this.list.getPokemonCollection('1')
      .then(data => {
        this.pokemons = data;
      })
      .catch(err => console.log(err));
  }

}
