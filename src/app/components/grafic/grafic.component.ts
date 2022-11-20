import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafic',
  templateUrl: './grafic.component.html',
  styleUrls: ['./grafic.component.css']
})
export class GraficComponent implements OnDestroy {

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 20
  //   }
  // ];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // interval: any;

  constructor() {

    // this.interval = setInterval( () => {

    //   console.log('tick');

    //   const newResults = [...this.results];

    //   for (let i in newResults) {

    //     newResults[i].value = Math.round(Math.random() * 500);

    //   }

    //   this.results = [...newResults];

    // }, 1500)

  }

  ngOnDestroy(): void {

    // clearInterval(this.interval);

  }

  onSelect(event: any) {

    console.log(event);

  }

}
