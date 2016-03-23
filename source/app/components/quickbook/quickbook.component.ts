import {Component} from 'angular2/core';
import {SingleOrMultiLegComponent, LegType} from './SingleOrMultiLeg/singleOrMultiLeg.component';
import {OutwardRouteComponent} from './OutwardRoute/outwardRoute.component';
import {ReturnRouteComponent} from './ReturnRoute/returnRoute.component';
import {DepartureDateComponent} from './DepartureDate/departureDate.component';
import {ReturnDateComponent} from './ReturnDate/returnDate.component';
import {PassengersComponent} from './Passengers/passengers.component';
import {VehiclesComponent} from './Vehicles/vehicles.component';
import {OfferCodeComponent} from './OfferCode/offerCode.component';

import {Passengers, Vehicle, Route} from './quickbook.models';
import {QuickbookService} from './quickbook.service';

@Component ({
   selector: 'quickbook',
   template: require('./quickbook.html'),
   styles: [require('./quickbook.scss')],
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
    
    outwardRoutes: Route[] = [new Route("DVDK", "DoverDunkirk"), new Route("DKDV", "DunkirkDover")];
    returnRoutes: Route[] = [new Route("DKDV", "DunkirkDover"), new Route("DVDK", "DoverDunkirk")];
    departureDates: Date[] = [new Date(), new Date()];
    returnDates: Date[] = [new Date(), new Date()];
    passengers: Passengers = new Passengers();
    vehicles: Vehicle[] = [new Vehicle("CAR", "Bil 4m"), new Vehicle("MINI", "Minibus 10m")];
    
    constructor(private quickbookService: QuickbookService) {
        
        
    }
    
    onLegTypeChange(type: LegType) {
        console.log(type);
    }
    
    onOutwardRouteSelect(routeCode) {
        console.log(routeCode);
    }
    
    onReturnRouteSelect(routeCode) {
        console.log(routeCode);
    }
    
    onDepartureDateSelect(date) {
        console.log(date);
    }
    
    onReturnDateSelect(date) {
        console.log(date);
    }
    
    onAdultSelect(count) {
        console.log(count);
    }
    
    onChildSelect(count) {
        console.log(count);
    }
    
    onInfantSelect(count) {
        console.log(count);
    }
    
    onPetSelect(count) {
        console.log(count);
    }
    
    onVehicleSelect(vehicleCode) {
        console.log(vehicleCode);
    }
    
    onOfferCodeChange(code) {
        console.log(code);
    }
}