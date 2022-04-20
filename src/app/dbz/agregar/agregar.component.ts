import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../model/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input()
  personajes:Personaje[] = [];
  
  @Output()
  agregar: EventEmitter<Personaje>= new EventEmitter();

  constructor(private dbzService: DbzService){

  }

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  agregarNuevo() {
    if(this.nuevo.nombre.trim().length === 0){
      return;
    }

    this.dbzService.addPersonaje(this.nuevo);

    this.nuevo = { //reiniciamos nuevo
      nombre: '',
      poder: 0
    }
  }

}
