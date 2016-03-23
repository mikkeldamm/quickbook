import {Component} from 'angular2/core';
import {SingleOrMultiLegComponent} from './SingleOrMultiLeg/singleOrMultiLeg.component';
import {OutwardRouteComponent} from './OutwardRoute/outwardRoute.component';
import {ReturnRouteComponent} from './ReturnRoute/returnRoute.component';
import {DepartureDateComponent} from './DepartureDate/departureDate.component';
import {ReturnDateComponent} from './ReturnDate/returnDate.component';
import {PassengersComponent} from './Passengers/passengers.component';
import {VehiclesComponent} from './Vehicles/vehicles.component';
import {OfferCodeComponent} from './OfferCode/offerCode.component';

import {QuickbookService} from './quickbook.service';

@Component ({
   selector: 'quickbook',
   template: require('./quickbook.html'),
   directives: [SingleOrMultiLegComponent,
                OutwardRouteComponent,
                ReturnRouteComponent,
                DepartureDateComponent,
                ReturnDateComponent,
                PassengersComponent,
                VehiclesComponent,
                OfferCodeComponent],
    bindings: [QuickbookService]
})
export class QuickbookComponent{
    
    public name: string = "jon";
    
    constructor(private quickbookService: QuickbookService) {
        
        
    }
    
    getRoutesForSelect() {
        
        let routes = this.quickbookService.getRoutes();
    }
}