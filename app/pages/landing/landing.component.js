import {Component}      from 'angular2/core';

@Component({
    selector: 'landing',
    templateUrl: '/app/pages/landing/landing.component.html',
    styles: [ require('./landing.component.scss').toString() ],
})
export class Landing { }