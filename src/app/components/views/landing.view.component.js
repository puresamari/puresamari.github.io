import 'style/components/hero.component.scss';
import template from 'templates/components/views/landing.view.component.html';

import {Component} from 'angular2/core';

@Component({
    selector: 'landing',
    template: template
})
export class Landing {
    constructor() {
        this.componentList = [ 'ApiTesting', 'Test', 'Overview', 'Tools' ];
    }
}