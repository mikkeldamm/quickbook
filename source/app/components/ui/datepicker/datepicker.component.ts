import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'datepicker',
    template: require('./datepicker.html'),
})
export class DatepickerComponent {

    @Output() onDateSelected = new EventEmitter<Date>();
}