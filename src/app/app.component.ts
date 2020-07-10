import { Component } from '@angular/core';
import { StackEffects } from 'projects/ngx-stack-effects/src/public-api';


@Component({
  selector: 'ngx-stack-effects-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  effects = StackEffects;
  title = 'StackEffects';

  animationend(e) {
    console.log(e);
  }
}
