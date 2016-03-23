import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'offerCode',
    template: require('./offerCode.html')
})
export class OfferCodeComponent {
    
    @Output() onChange = new EventEmitter<string>();
    
    onOfferCodeChange(code) {
        
        this.onChange.emit(code);
    }
}