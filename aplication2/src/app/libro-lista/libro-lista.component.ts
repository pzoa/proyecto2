import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro';

@Component({
 selector: 'app-libro-lista',
 templateUrl: './libro-lista.component.html',
 styleUrls: ['./libro-lista.component.css']
})
export class LibroListaComponent implements OnInit {
libros:Array<Libro>

 constructor() {
 	this.libros = [
 	new Libro("El Perfume", "La historia de un asesino que mata mujeres para robar sus aromas", "Patrick Suskind"),
 	new Libro("El Caballero Carmelo", "Narra la historia de un gallo viejo que da su ultima pelea", "Abraham Valdelomar"),
 	new Libro("Los Simallirion", "Es la historia anterior al Hobbit. Narra la historia de la creacion del mundo", "Tolkien")
 	]
  }

 agregar(libro:Libro) {
 	this.libros.unshift(libro);
 }

 ngOnInit() {
 }

}
