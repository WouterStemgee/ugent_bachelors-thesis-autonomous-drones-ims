import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph-data',
  templateUrl: './graph-data.component.html',
  styleUrls: ['./graph-data.component.css']
})
export class GraphDataComponent implements OnInit {
  //algemene variabelen

  //ng2-charts
  boundedOptions = {
    responsive: true
  };

  boundedDataSet = [
    { data: [330, 600, 260, 700, 400, 500, 600], label: 'Account A' },
    { data: [120, 455, 100, 340, 400, 500, 600], label: 'Account B' },
    { data: [45, 67, 800, 500, 400, 500, 600], label: 'Account C' }
  ];

  boundedLabels = ['January', 'February', 'Mars', 'April','Mei', 'juni', 'juli'];

  boundedLegend = false;

  //ngx-charts
  D3Dataset : any[] = [
    {
      name: 'remaining',
      series: [
        {
          name: 0 ,
          value: 0
        },
        {
          name: 5 ,
          value: 0
        },
        {
          name: 10 ,
          value: 85
        },
        {
          name: 15 ,
          value:84
        }
      ]
    }
  ];

  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = false;
  yAxisLabel = 'Color Value';
  timeline = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() { }

  ngOnInit() {
  }

  onSelect(event) {
    this.pushValue();
  }

  /** Data toevoegen: eerste waarde is een timestamp, voorlopig veronderstel ik enkel de batterij met een timestamp
   * en waarde van 0 tot 1 hoeveel de batterij nog bedraagt. **/

  pushValue() {
    let batteryState = 84;
    let time = 20;

    if(!Date.now()) {
      Date.now = function() { return new Date().getTime(); }
    }
    this.D3Dataset[0].series.push({name: time, value: batteryState--});
    this.D3Dataset = this.D3Dataset.slice();
    time += 5;
    console.log(this.D3Dataset);
  }

}
