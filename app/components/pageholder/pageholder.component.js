import { Component } from 'angular2/core';

@Component({
    selector: 'page-holder',
    template: require('./pageholder.component.html')
})
export class PageHolder {
    constructor() {
        this.page = {};
        this.page.title = 'nan';
    }
}