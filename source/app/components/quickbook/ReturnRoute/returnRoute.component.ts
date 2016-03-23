import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Route} from '../quickbook.models';

@Component({
    selector: 'returnRoute',
    template: require('./returnRoute.html')
})
export class ReturnRouteComponent {

    @Input() routes: Route[];
    @Output() onSelected = new EventEmitter<string>();

    onChange(value) {

        this.onSelected.emit(value);
    }
}