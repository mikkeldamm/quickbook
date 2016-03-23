import {Component} from 'angular2/core';
import {DatepickerComponent} from '../../ui/datepicker/datepicker.component';

@Component ({
   selector: 'returnDate',
   template: `
     <div>
       <label>Return Date</label>
       <datepicker></datepicker>
     </div>
   `,
   directives: [DatepickerComponent]
})
export class ReturnDateComponent{ }