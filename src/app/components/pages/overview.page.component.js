import template from 'templates/components/default.page.component.html';
import {Component} from 'angular2/core';

@Component({
    selector: 'overview',
    template: template
})
export class Overview { constructor() { this.title = 'Overview' } }