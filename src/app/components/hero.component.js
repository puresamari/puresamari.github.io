import {Component} from 'angular2/core';

@Component({
  selector: 'hero',
  template: '<head><h1>Hello world from angular!!!</h1></head>'
})
export class Hero {
    constructor () {
        console.log('test');
    }
}