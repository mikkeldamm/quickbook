import {Component} from 'angular2/core';
import {DatepickerComponent} from '../../ui/datepicker/datepicker.component';

@Component ({
   selector: 'departureDate',
   template: `
     <div>
       <label>Departure Date</label>
       <datepicker></datepicker>
     </div>
   `,
   directives: [DatepickerComponent]
})
export class DepartureDateComponent{ }