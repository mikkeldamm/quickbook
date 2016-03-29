import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Route} from '../quickbook.models';

@Component({
    selector: 'outwardRoute',
    template: require('./outwardRoute.html'),
    styles: [ require('./outwardRoute.scss') ]
})
export class OutwardRouteComponent {

    @Input() routes: Route[];
    @Output() onSelected = new EventEmitter<string>();
    
    onChange(value) {
        
        this.onSelected.emit(value);
    }
}