import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Pokedex } from './pokedex';
import { Pokemon } from './pokemon';

@Injectable()
export class MyApiClientServiceService {

  private baseURL: string = "http://pokeapi.co/api/v2/"

  constructor(private http: Http) {


  }

}
