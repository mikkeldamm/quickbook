import {Component} from 'angular2/core';

@Component ({
   selector: 'passengers',
   template: `
     <div>
       <label>Adults</label>
       <select>
         <option>Repeat me</option>
       </select>
       
       <label>Child(4-15)</label>
       <select>
         <option>Repeat me</option>
       </select>
       
       <label>Infant(0-3)</label>
       <select>
         <option>Repeat me</option>
       </select>
       
       <label>Pet</label>
       <select>
         <option>Repeat me</option>
       </select>
     </div>
   `
})
export class PassengersComponent{ }