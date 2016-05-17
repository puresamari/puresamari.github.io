import { Renderer, ElementRef, Component }            from 'angular2/core';
import { ROUTER_DIRECTIVES }    from 'angular2/router';

@Component({
    selector: 'menu',
    inputs: ['items: menu-items'],
    templateUrl: '/app/components/menu/menu.component.html',
    directives: [ROUTER_DIRECTIVES],
    styles: [ require('./menu.component.scss').toString() ],
})
export class Menu {
    constructor(renderer, el) {
        renderer.setElementClass(el.nativeElement, 'position-middle', true);
        document.addEventListener('routeChange', this.setMenuPos);
    }
    
    setNewMenuPos(e) {
        console.log(e);
    }
    
    static get parameters() {
        return [[Renderer], [ElementRef]];
    }
}