import {Component} from 'angular2/core';

@Component({
    selector: 'feed',
    templateUrl: '/app/pages/landing/landing.component.html',
})
export class Feed { constructor() { this.title = 'Feed' } }