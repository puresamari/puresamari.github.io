import { Component }            from 'angular2/core';
import { ROUTER_DIRECTIVES }    from 'angular2/router';

@Component({
    selector: '[page-holder]',
    inputs: ['pg: page'],
    template: require('./pageholder.component.html'),
    directives: [ ROUTER_DIRECTIVES ],
    styles: [ require('./pageholder.component.scss').toString() ],
})
export class PageHolder { }