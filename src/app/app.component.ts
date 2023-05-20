import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeDisp';
  dividendo = 10;
  //el código original define "divisor" como un número en vez de un string generando un error grave a la hora de pasarlo al pipe que solo acepta strings. (7/10)
  divisor = "2";
}
