import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecmascript',
  templateUrl: './ecmascript.component.html',
  styleUrls: ['./ecmascript.component.css'],
})
export class EcmascriptComponent {
  // ES5
  // Imaginemos una variable data que incluye un array de objectos
  data = [1, 2, 3];

  recorreData() {
    //Sin ecmascript 6
    // this.data.forEach(function (elem) {
    //   // Tratamos el elemento
    //   console.log(elem);
    // });

    //Con ecmascript
    this.data.forEach(elem=>{
      console.log(elem);
    })

  }
}
