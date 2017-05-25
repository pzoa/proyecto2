import { Component, OnInit, Input} from '@angular/core';
import { Libro } from '../libro';

@Component({
  selector: 'libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
	@Input("book") libro:Libro;
  constructor() { }

  ngOnInit() {
  }

}
