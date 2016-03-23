import {Component} from 'angular2/core';
import {DatepickerComponent} from '../../ui/datepicker/datepicker.component';

@Component ({
   selector: 'departureDate',
   template: require('./departure-date.html'),
   directives: [DatepickerComponent]
})
export class DepartureDateComponent{ }