import template from 'templates/components/default.page.component.html';
import {Component} from 'angular2/core';

@Component({
    selector: 'api-testing',
    template: template
})
export class ApiTesting { constructor() { this.title = 'Api Testing' } }