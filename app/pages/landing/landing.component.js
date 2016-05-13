import './landing.component.scss';

import {Component} from 'angular2/core';

@Component({
    selector: 'landing',
    template: require('./landing.component.html'),
})
export class Landing {
    constructor() {
        this.componentList = [ 'ApiTesting', 'Test', 'Overview', 'Tools' ];
    }
}