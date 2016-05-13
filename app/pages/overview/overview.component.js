import {Component} from 'angular2/core';

@Component({
    selector: 'overview',
    template: require('../default.component.html')
})
export class Overview { constructor() { this.title = 'Overview' } }