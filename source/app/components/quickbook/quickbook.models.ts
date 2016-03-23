export class Route {
    
    text: string;
    code: string;
    
    constructor(code, text) {
        
        this.code = code;
        this.text = text;
    }
}

export class Vehicle {
    
    text: string;
    code: string;
    
    constructor(code, text) {
        
        this.code = code;
        this.text = text;
    }
}

export class Passengers {
    
    adults: number = 6;
    children: number = 5;
    infants: number = 5;
    pets: number = 4;
}
