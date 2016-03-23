import {Component} from 'angular2/core';
import {QuickbookComponent} from './components/quickbook/quickbook.component';

@Component ({
   selector: 'app',
   template: '<div><h2>This is the app</h2><quickbook></quickbook></div>',
   directives: [QuickbookComponent]
})
export class AppComponent{}

