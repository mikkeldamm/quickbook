import {Component} from 'angular2/core';

@Component ({
   selector: 'returnRoute',
   template: `
   <div>
     <label>Return Route</label>
     <select>
       <option>Repeat me</option>
     </select>
   </div>
   `
})
export class ReturnRouteComponent{ }