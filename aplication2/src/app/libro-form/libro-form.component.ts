import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.css']
})
export class LibroFormComponent implements OnInit {
@Output() libroCreado = new EventEmitter<Libro>()
  constructor() { }
  crear(titulo, resena, autor){
  this.libroCreado.emit(new Libro(titulo, resena, autor));
  }

  ngOnInit() {
  }

}
