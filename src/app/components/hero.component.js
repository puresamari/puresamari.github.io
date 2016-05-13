import 'style/components/hero.component.scss';
import {Component} from 'angular2/core';

@Component({
  selector: 'hero',
  templateUrl: '/src/templates/components/hero.component.html'
})
export class Hero {
    constructor () {
        console.log('test');
    }
}