import { Component }    from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } 
                        from 'angular2/router';

import { Landing }      from './pages/landing/landing.component';

import { Feed }         from './pages/feed/feed.component';
import { Stuff }        from './pages/stuff/stuff.component';
import { Overview }     from './pages/overview/overview.component';
import { Portfolio }    from './pages/portfolio/portfolio.component';
import { PageHolder }   from './components/pageholder/pageholder.component';


const DIRECTIVES = [ Landing, Feed, Stuff, Overview, Portfolio, PageHolder ];

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    directives: [ ROUTER_DIRECTIVES, DIRECTIVES ],
    styles: [ require('app.component.scss').toString() ],
})
@RouteConfig([
    { path: '/', component: Landing, name: 'Landing', useAsDefault: true },
    { path: '/stuff', component: Stuff, name: 'Stuff' },
    { path: '/feed', component: Feed, name: 'Feed' },
    { path: '/overview', component: Overview, name: 'Overview'},
    { path: '/portfolio', component: Portfolio, name: 'Portfolio' },
])
export class AppComponent {
    constructor() {
        this.menuItems = [ 'Feed', 'Stuff', 'Overview', 'Portfolio' ];
//        this.router.changes.subscribe(() => {
//            console.log('test');
//        });
    }
}