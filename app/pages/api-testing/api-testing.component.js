import {Component} from 'angular2/core';

@Component({
    selector: 'api-testing',
    template: require('../default.component.html')
})
export class ApiTesting { constructor() { this.title = 'Api Testing' } }