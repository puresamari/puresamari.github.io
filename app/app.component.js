import { Component }    from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } 
                        from 'angular2/router';

import { Landing }      from './pages/landing/landing.component';

import { Feed }         from './pages/feed/feed.component';
import { Stuff }        from './pages/stuff/stuff.component';
import { Overview }     from './pages/overview/overview.component';
import { Me }           from './pages/me/me.component';


const DIRECTIVES = [ Landing, Feed, Stuff, Overview, Me ];

@Component({
    selector: '[app]',
    templateUrl: '/app/app.component.html',
    directives: [ ROUTER_DIRECTIVES, DIRECTIVES ],
    providers: [ROUTER_PROVIDERS],
    styles: [ require('./app.component.scss').toString() ],
})
@RouteConfig([
    { path: '/', component: Landing, name: 'Landing', useAsDefault: true },
    { path: '/stuff', component: Stuff, name: 'Stuff' },
    { path: '/feed', component: Feed, name: 'Feed' },
    { path: '/overview', component: Overview, name: 'Overview'},
    { path: '/me', component: Me, name: 'Me' },
])
export class AppComponent {
    
    constructor( Router ) {
        
        this.menuItems = [ 'Feed', 'Me', 'Overview', 'Stuff' ];
        
        this.Router = Router;
        
        this.activeRoute = '';
        this.loading = true;
        
        var _this = this;
        
        this.Router.subscribe(val => {
            _this.activeRoute = val, _this.loading = true;
            setTimeout(() => { _this.loading = false; }, 1000)
        })
    }
    
    static get parameters() {
        return [[Router]];
    }
}