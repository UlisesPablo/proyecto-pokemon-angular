import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort} from '@angular/material/sort';
import { PokemonService } from '../services/servicio/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  displayedColumns: string[] = ['position','name','pokemon','evolucion','acciones'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  getIdPokemon = [];
  llenarArray(){

    for (let i = 1; i <= 151; i++) {
      this.getIdPokemon.push(i)
    }
  }

  constructor(
    private pokemonService: PokemonService,
  ) {
    this.dataSource = new MatTableDataSource(this.pokemons)
  }
  ngOnInit(): void {

    this.llenarArray()
    this.dataSource.sort = this.sort;
    this.getPokemons();
  }

  getPokemons(){
    let pokemonData
    this.data = []
    //for (let i = 1; i <= 151; i++) {
      for(let i of this.getIdPokemon){
      this.pokemonService.getAllPokemones(i).subscribe(
        response =>{
          pokemonData = {
            position: i,
            evolucion:response.sprites.other.dream_world.front_default,
            imagen: response.sprites.front_shiny,
            name: response.name
          };
          this.data.push(pokemonData);
          this.pokemons=pokemonData;
          this.dataSource = new MatTableDataSource<any>(this.data);
          // console.log("esta es data " + this.data)

          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error=>{
          console.log(error)
        }
      );
    }
 }
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

eliminarPokemon(position: number){

console.log("antes" +this.getIdPokemon );

this.getIdPokemon = this.getIdPokemon.filter(function(i) { return i !== position }); // filtramos

console.log("despues"+ this.getIdPokemon );
this.getPokemons();
// console.log("this.getIdPokemon"+ this.getIdPokemon)
// console.log("drop"+ drop)


}






}

