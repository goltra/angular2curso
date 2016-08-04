// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Pelicula} from '../model/pelicula';
import {PeliculasService} from '../services/peliculas.service';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    templateUrl:'app/view/crear-pelicula.html',
    providers: [PeliculasService],
})


// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent implements OnInit{

    public TituloPelicula=""; 
    public nuevaPelicula: Pelicula;

    constructor(private _peliculasService: PeliculasService, 
                private _router: Router, 
                private _routeParams: RouteParams){

    }
    onSubmit(){
        this._peliculasService.insertPelicula(this.nuevaPelicula);
        this._router.navigate(["Peliculas"]);
    }
    ngOnInit():any{
        this.TituloPelicula=this._routeParams.get("titulo");
        this.nuevaPelicula = new Pelicula(
            0,
            this._routeParams.get("titulo"),
            this._routeParams.get("director"),
            this._routeParams.get("anio")
        )
        console.log(this.nuevaPelicula);
    }
   
 }