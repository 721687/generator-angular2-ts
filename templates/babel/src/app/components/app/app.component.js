// importables
import { Component } from '@angular/core';
import Html from './app.component.html!text';
import Css from './app.component.css!text';

// decorator for component constructor
@Component( {
  selector : 'sg-app',
  styles: [ Css ],
  template : Html
} )

// component
export class AppComponent { // it is recommended to export class in place

  // constructor
  constructor () {

    // this is for demoing
    this.name = `wait for it ...`;

    // timeout
    const timeout = 2500; // type is inferred

    // this is a bit artifical
    setTimeout( () => {
      this.name = `Angular 2.0`;
    }, timeout );

  }

}