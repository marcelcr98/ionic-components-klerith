import { Component, OnInit } from '@angular/core';
import { RangeChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange(event: CustomEvent<RangeChangeEventDetail>) {
    const value = event.detail.value;
    if (typeof value === 'number') {
        this.porcentaje = value / 100;
    } else if (typeof value === 'object' && value !== null) {
        const upper = value.upper;
        if (typeof upper === 'number') {
            this.porcentaje = upper / 100;
        }
    }
}

}