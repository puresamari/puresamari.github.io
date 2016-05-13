import 'zone.js';
import 'reflect-metadata';

import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
  selector: 'my-app',
  template: '<h1>Hello world from angular!!!</h1>'
})
export class AppComponent { }

bootstrap(AppComponent);