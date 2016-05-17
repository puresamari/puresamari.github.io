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
        this.renderer = renderer;
        this.element = el;
        var _this = this;
        document.addEventListener('route-change', e => this.setNewMenuPos(e, _this.renderer, _this.element));
    }
    
    setNewMenuPos(ev, r, e) {
        r.setElementClass(e.nativeElement, 'position-'+ev.detail.previous, false);
        r.setElementClass(e.nativeElement, 'position-'+ev.detail.current, true);
    }
    
    static get parameters() {
        return [[Renderer], [ElementRef]];
    }
}