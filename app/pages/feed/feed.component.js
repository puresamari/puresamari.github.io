import {Component} from 'angular2/core';

@Component({
    selector: 'feed',
    template: require('../default.component.html')
})
export class Feed { constructor() { this.title = 'Api Testing' } }