import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-pokedex';
  nav: boolean = false;
  toogleNav() {
    this.nav = !this.nav
    console.log(this.nav)
  }
}

