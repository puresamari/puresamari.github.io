import {Component} from 'angular2/core';

@Component({
    selector: 'portfolio',
    template: require('../default.component.html')
})
export class Portfolio { constructor() { this.title = 'Tools' } }