import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({
  declarations: [
    ContadorComponent
  ],
  exports: [
    ContadorComponent
  ],
//   imports: [ No es necesario porque no hay directivas ngfor o ngif

//     CommonModule // este Module no es necesario en el basico pero aqui si
//   ]
})


export class ContadorModule { }
