import {Component} from 'angular2/core';

@Component({
    selector: 'stuff',
    templateUrl: '/app/pages/default.component.html',
})
export class Stuff { constructor() { this.title = 'Stuff' } }