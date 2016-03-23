import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Passengers} from '../quickbook.models';

@Component({
    selector: 'passengers',
    template: require('./passengers.html')
})
export class PassengersComponent {
    
    @Input() passengers: Passengers;
    
    @Output() onAdultSelected = new EventEmitter<number>();
    @Output() onChildSelected = new EventEmitter<number>();
    @Output() onInfantSelected = new EventEmitter<number>();
    @Output() onPetSelected = new EventEmitter<number>();
    
    getItemsByCount(count) {
        return Array.apply(null, {length: count+1}).map(Number.call, Number);
    }
    
    onAdultSelect(count) {
        this.onAdultSelected.emit(count);
    }
    
    onChildSelect(count) {
        this.onChildSelected.emit(count);
    }
    
    onInfantSelect(count) {
        this.onInfantSelected.emit(count);
    }
    
    onPetSelect(count) {
        this.onPetSelected.emit(count);
    }
}