import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<nav>
    <div class="nav-wrapper blue lighten-1">
      <a href="#" class="brand-logo">Cirugia</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
      </ul>
    </div>
  </nav>
  <router-outlet></router-outlet>
   `
})

export class AppComponent  {}
