import { HttpClient } from '@angular/common/http';

export class HttpService {
  constructor(private _http: HttpClient) {
    this.getPokemon();
  }
  getPokemon() {
    let poke_request = '';
    const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
    }
  }
interface Hit {
  abilities: Object[];
}
interface Ability {
  pokemone: Object[];
}

