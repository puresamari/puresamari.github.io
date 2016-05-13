import { Component }    from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } 
                        from 'angular2/router';

import { Landing }      from './pages/landing/landing.component';

import { ApiTesting }   from './pages/api-testing/api-testing.component';
import { Test }         from './pages/test/test.component';
import { Overview }     from './pages/overview/overview.component';
import { Tools }        from './pages/tools/tools.component';

const DIRECTIVES = [ Landing, ApiTesting, Test, Overview, Tools ];

@Component({
    selector: 'app',
    template: require('app.component.html'),
    directives: [ ROUTER_DIRECTIVES, DIRECTIVES ],
    styles: [ require('app.component.scss').toString() ]
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