import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'singleOrMultiLeg',
    template: require('./singleOrMultiLeg.html'),
    styles: [require('./singleOrMultiLeg.scss')]
})
export class SingleOrMultiLegComponent {

    @Output() onChange = new EventEmitter<LegType>();

    isReturnLegSelected: boolean = true;

    selectLegType(type: string) {

        if (type === "return") {
            
            this.onChange.emit(LegType.Return);
            this.isReturnLegSelected = true;
            
        } else if (type === "oneway") {
            
            this.onChange.emit(LegType.OneWay);
            this.isReturnLegSelected = false;
        }
    }
}

export enum LegType {
    Return,
    OneWay
}