import { Injectable } from '@angular/core';
import { Personaje } from '../model/personaje';

@Injectable()
export class DbzService {


  constructor() {
    console.log('Servicio inicializado');
  }

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 13000,
    },
  ];

  get personajes(): Personaje[] {
      return [...this._personajes]; // ... es spread, rompiendo la referencia de los personajes
  }

  addPersonaje(personaje:Personaje):void {
      this._personajes.push(personaje);
  }


}
