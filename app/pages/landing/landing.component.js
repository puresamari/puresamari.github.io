import {Component} from 'angular2/core';

@Component({
    selector: 'landing',
    template: require('./landing.component.html'),
    styles: [ require('./landing.component.scss').toString() ]
})
export class Landing {
    constructor() {
        this.componentList = [ 'ApiTesting', 'Test', 'Overview', 'Tools' ];
    }
}