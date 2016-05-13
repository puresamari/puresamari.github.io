import template from 'templates/components/default.page.component.html';
import {Component} from 'angular2/core';

@Component({
    selector: 'test',
    template: template
})
export class Test { constructor() { this.title = 'Test' } }