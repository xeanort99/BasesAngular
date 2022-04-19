import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];

  //heroeBorrado: string|undefined="";

  heroeBorrado: string="";

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift()|| ''; //primer elemento
    //const heroeBorrado = this.heroes.pop();  Segundo elemento

    console.log(this.heroeBorrado);
  }
}
