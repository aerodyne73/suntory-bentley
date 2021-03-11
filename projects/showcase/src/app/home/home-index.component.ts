import { Component } from '@angular/core';
import { AnimationOptions } from 'mapbox-gl';

@Component({
  template: `
    <mgl-map
      [style]="'mapbox://styles/mapbox/streets-v9'"
      [zoom]="[2]"
      [center]="center"
      [centerWithPanTo]="true"
      [panToOptions]="panToOptions"
      [interactive]="false"
      (mapLoad)="moveCenter()"
      (moveEnd)="moveCenter()"
    ></mgl-map>
    <div class="main">
      <img src="http://rizq.cloudns.cl/wp-content/uploads/2021/03/logo-sharp.png" width="50%">
      <h1>suntory binding for mapbox-gl-js</h1>
    </div>
  `,
  styleUrls: ['./home-index.component.scss'],
})
export class HomeIndexComponent {
  center = [0, 0];
  panToOptions: AnimationOptions = { duration: 10000, easing: (t) => t };

  moveCenter() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const targetY = this.center[0];
    if (targetY === 0) {
      this.center = [90, 0];
    } else if (targetY === 90) {
      this.center = [180, 0];
    } else if (targetY === 180) {
      this.center = [-90, 0];
    } else if (targetY === -90) {
      this.center = [0, 0];
    }
  }
}
