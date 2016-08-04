import {Component} from 'angular2/core';
import {Pelicula} from '../model/pelicula';
import {Router, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {PeliculasService} from '../services/peliculas.service';

 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'pelicula-list',
    templateUrl:'app/view/peliculas-list.html',
    providers:[PeliculasService],
    directives:[ROUTER_DIRECTIVES]
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {
	
    public pelicula:Pelicula;
    public peliculaElegida:Pelicula;
    public mostrarDatos:boolean;
    public peliculas;
    public titulo:string;
    public datoServicio;


    constructor(private _peliculasService: PeliculasService){
    	this.titulo="Películas";
        this.mostrarDatos = false;

        //this.debug();
        this.peliculas=this._peliculasService.getPeliculas()
        this.pelicula=this.peliculas[0];
        this.peliculaElegida=this.pelicula;

    }

    debug(){
    	console.log(this.pelicula);
    }
    onShowHide(value){
       this.mostrarDatos=value;
    }
    onCambiarPelicula(pelicula){
        this.pelicula = pelicula;
        this.peliculaElegida=pelicula;
    }
}