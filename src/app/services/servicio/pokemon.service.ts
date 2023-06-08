import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }


  public getAllPokemones(i){
    return this.httpClient.get<any>(`${this.baseUrl}pokemon/${i}`);
  }
}
