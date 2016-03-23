import {Component, Output, EventEmitter} from 'angular2/core';
import {DatepickerComponent} from '../../ui/datepicker/datepicker.component';

@Component ({
   selector: 'departureDate',
   template: require('./departureDate.html'),
   directives: [DatepickerComponent]
})
export class DepartureDateComponent {
    
    @Output() onSelected = new EventEmitter<Date>();

    onDateSelect(date: Date) {

        this.onSelected.emit(date);
    }
}