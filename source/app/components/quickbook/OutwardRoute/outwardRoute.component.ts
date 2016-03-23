import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'outwardRoute',
    template: require('./outward-route.html')
})
export class OutwardRouteComponent {

    @Input() routes: string[];
    @Output() onSelected = new EventEmitter<string>();
    
    onChange(value) {
        
        this.onSelected.emit(value);
    }
}