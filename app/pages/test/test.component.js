import {Component} from 'angular2/core';

@Component({
    selector: 'test',
    template: require('../default.component.html')
})
export class Test { constructor() { this.title = 'Test' } }