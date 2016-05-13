import {Component} from 'angular2/core';

@Component({
    selector: 'stuff',
    template: require('../default.component.html')
})
export class Stuff { constructor() { this.title = 'Stuff' } }