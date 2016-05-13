import 'style/components/hero.component.scss';
import {Component} from 'angular2/core';

@Component({
  selector: 'hero',
  template: '<h1>Hello world from angular!!!</h1>'
})
export class Hero {
    constructor () {
        console.log('test');
    }
}