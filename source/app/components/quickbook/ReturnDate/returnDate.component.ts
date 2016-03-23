import {Component, Output, EventEmitter} from 'angular2/core';
import {DatepickerComponent} from '../../ui/datepicker/datepicker.component';

@Component({
    selector: 'returnDate',
    template: require('./returnDate.html'),
    directives: [DatepickerComponent]
})
export class ReturnDateComponent {

    @Output() onSelected = new EventEmitter<Date>();

    onDateSelect(date: Date) {

        this.onSelected.emit(date);
    }
}