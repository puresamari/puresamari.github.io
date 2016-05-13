import { Component }from 'angular2/core';

import { Hero }from './hero.component';

const DIRECTIVES = [Hero];


@Component({
    selector: 'app',
    template: '<hero></hero>',
    directives: DIRECTIVES,
    providers: []
})
export class AppComponent {
    constructor(titleService) {
        this.titleService = titleService;
    }

    setTitle(newTitle) {
        this.titleService.setTitle(newTitle);
    }
}