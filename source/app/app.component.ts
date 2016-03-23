import {Component} from 'angular2/core';
import {QuickbookComponent} from './components/quickbook/quickbook.component';

@Component ({
   selector: 'app',
   template: `
     <div>
        <quickbook></quickbook>
     </div>
    `,
   styles:[`
    h2 {
        background-color: red;
    }
   `],  
   directives: [QuickbookComponent]
})
export class AppComponent{ }