import {Component} from 'angular2/core';
import {DatepickerComponent} from '../../ui/datepicker/datepicker.component';

@Component ({
   selector: 'returnDate',
   template: require('./return-date.html'),
   directives: [DatepickerComponent]
})
export class ReturnDateComponent{ }