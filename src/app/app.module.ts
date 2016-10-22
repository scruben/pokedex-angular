import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MyPokedexComponent } from './my-pokedex/my-pokedex.component';
import { MyPokemonComponent } from './my-pokemon/my-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MyPokedexComponent,
    MyPokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: MyPokedexComponent
      },
      {
        path: 'pokemon/:pokemonName',
        component: MyPokemonComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
