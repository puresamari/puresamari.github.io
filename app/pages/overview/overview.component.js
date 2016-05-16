import {Component} from 'angular2/core';

@Component({
    selector: 'overview',
    templateUrl: '/app/pages/default.component.html',
    styles: [ require('./overview.component.scss').toString() ]
})
export class Overview { constructor() { this.title = 'Overview' } }