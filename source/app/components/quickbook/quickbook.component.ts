import {Component} from 'angular2/core';
import {SingleOrMultiLegComponent} from './SingleOrMultiLeg/singleOrMultiLeg.component';
import {OutwardRouteComponent} from './OutwardRoute/outwardRoute.component';
import {ReturnRouteComponent} from './ReturnRoute/returnRoute.component';
import {DepartureDateComponent} from './DepartureDate/departureDate.component';
import {ReturnDateComponent} from './ReturnDate/returnDate.component';
import {PassengersComponent} from './Passengers/passengers.component';
import {VehiclesComponent} from './Vehicles/vehicles.component';
import {OfferCodeComponent} from './OfferCode/offerCode.component';

//import template from './quickbook.html!text';


@Component ({
   selector: 'quickbook',
   templateUrl: '/app/components/quickbook/quickbook.html',
   //template: require(''),
   directives: [SingleOrMultiLegComponent,
                OutwardRouteComponent,
                ReturnRouteComponent,
                DepartureDateComponent,
                ReturnDateComponent,
                PassengersComponent,
                VehiclesComponent,
                OfferCodeComponent]
   
})
export class QuickbookComponent{}