import {Component}      from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } 
                        from 'angular2/router';

import { Feed }         from '../feed/feed.component';
import { Stuff }        from '../stuff/stuff.component';
import { Overview }     from '../overview/overview.component';
import { Portfolio }    from '../portfolio/portfolio.component';

//import { PageHolder }    from '/components/pageholder/pageholder.component';

const DIRECTIVES = [ Feed, Stuff, Overview, Portfolio ];

@Component({
    selector: 'landing',
    template: require('./landing.component.html'),
    styles: [ require('./landing.component.scss').toString() ],
    directives: [ ROUTER_DIRECTIVES, DIRECTIVES ],
})
@RouteConfig([
    { path: '/stuff', component: Stuff, name: 'Stuff' },
    { path: '/feed', component: Feed, name: 'Feed' },
    { path: '/overview', component: Overview, name: 'Overview', useAsDefault:   true},
    { path: '/portfolio', component: Portfolio, name: 'Portfolio' },
])
export class Landing {
    constructor() {
        this.menuItems = [ 'Feed', 'Stuff', 'Overview', 'Portfolio' ];
    }
}