import { Component }    from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } 
                        from 'angular2/router';

import { Landing }      from './pages/landing/landing.component';

const DIRECTIVES = [ Landing ];

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    directives: [ ROUTER_DIRECTIVES, DIRECTIVES ],
    styles: [ require('app.component.scss').toString() ]
})
@RouteConfig([
    { path: '/...', component: Landing, name: 'Landing', useAsDefault: true },
])
export class AppComponent {
    constructor() {
    }
}