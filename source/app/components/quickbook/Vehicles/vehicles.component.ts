import {Component} from 'angular2/core';

@Component ({
   selector: 'vehicles',
   template: `
   <div>
     <label>Vehicles</label>
     <select>
       <option>Repeat me</option>
     </select>
   </div>
   `
})
export class VehiclesComponent{ }