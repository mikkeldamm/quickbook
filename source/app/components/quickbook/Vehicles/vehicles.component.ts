import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Vehicle} from '../quickbook.models';

@Component ({
   selector: 'vehicles',
   template: require('./vehicles.html'),
    styles: [ require('./vehicles.scss') ]
})
export class VehiclesComponent {
    
    @Input() vehicles: Vehicle[];
    @Output() onSelected = new EventEmitter<string>();

    onChange(value) {

        this.onSelected.emit(value);
    }
}