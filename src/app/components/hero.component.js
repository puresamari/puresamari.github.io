import 'style/components/hero.component.scss';
import template from 'templates/components/hero.component.html';

import {Component} from 'angular2/core';

import { ApiTesting }from './pages/api-testing.page.component';
import { Test }from './pages/test.page.component';
import { Overview }from './pages/overview.page.component';
import { Tools }from './pages/tools.page.component';

const DIRECTIVES = [ ApiTesting, Test, Overview, Tools ];

@Component({
    selector: 'hero',
    directives: DIRECTIVES,
    template: template
})
export class Hero {
    constructor() {
        this.componentList = [ 'ApiTesting', 'Test', 'Overview', 'Tools' ];
    }
}