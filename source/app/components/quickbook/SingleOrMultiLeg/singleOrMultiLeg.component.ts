import {Component, Output, EventEmitter} from 'angular2/core';

@Component ({
   selector: 'singleOrMultiLeg',
   template: require('./singleOrMultiLeg.html')
})
export class SingleOrMultiLegComponent { 
    
     @Output() onChange = new EventEmitter<LegType>();
    
    selectLegType(type:string) {
        
        if (type === "return")
            this.onChange.emit(LegType.Return);
        else if (type === "oneway")
            this.onChange.emit(LegType.OneWay);
    }
}

export enum LegType {
    Return,
    OneWay
}