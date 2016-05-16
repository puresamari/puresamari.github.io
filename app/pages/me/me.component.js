import {Component} from 'angular2/core';

@Component({
    selector: 'me',
    templateUrl: '/app/pages/default.component.html',
})
export class Me { constructor() { this.title = 'Me' } }