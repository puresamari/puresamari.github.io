import template from 'templates/components/views/default.view.component.html';
import {Component} from 'angular2/core';

@Component({
    selector: 'tools',
    template: template
})
export class Tools { constructor() { this.title = 'Tools' } }