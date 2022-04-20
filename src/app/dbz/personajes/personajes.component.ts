import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../model/personaje';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent  {

  constructor(private dbzService: DbzService){

  }

  //@Input() personajes: Personaje[] = [];

  get personajes() {
    return this.dbzService.personajes;
  }
}
