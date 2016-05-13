import 'style/components/app.component.scss';
import template         from 'templates/components/app.component.html';

import { Component }    from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } 
                        from 'angular2/router';

import { Landing }      from './views/landing.view.component';

import { ApiTesting }   from './views/api-testing.view.component';
import { Test }         from './views/test.view.component';
import { Overview }     from './views/overview.view.component';
import { Tools }        from './views/tools.view.component';

const DIRECTIVES = [ Landing, ApiTesting, Test, Overview, Tools ];

@Component({
    selector: 'app',
    template: template,
    directives: [ ROUTER_DIRECTIVES, DIRECTIVES ],
})
@RouteConfig([
    
    { path: '/test', component: Test, name: 'Test' },
    { path: '/api-testing', component: ApiTesting, name: 'ApiTesting' },
    { path: '/overview', component: Overview, name: 'Overview' },
    { path: '/tools', component: Tools, name: 'Tools' },
    
    { path: '/**', component: Landing, name: 'Landing', useAsDefault: true },
])
export class AppComponent {
    constructor() {
        this.menuItems = [ 'Landing', 'ApiTesting', 'Test', 'Overview', 'Tools' ];
    }
}