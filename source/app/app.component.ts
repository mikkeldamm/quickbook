import {Component, ViewEncapsulation} from 'angular2/core';
import {QuickbookComponent} from './components/quickbook/quickbook.component';

@Component({
    selector: 'app',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div id="hero">
            <quickbook></quickbook>
        </div>
   `,
    styles: [`
        
        *,
        *:after,
        *:before {
            box-sizing: border-box;
        }
    
        body {
            background-color: #eaedee;
        }
        
        #hero {
            margin: 30px auto;
            width: 1280px;
            height: 500px;
            position: relative;
            background-image: url('http://www.dfdsseaways.co.uk/PublishingImages/about-us/1386x500-duinkerken-dover-3.jpg?RenditionID=2');
            background-size: cover;
        }
        
        #hero quickbook {
            position: absolute;
            left: 30px;
            top: 30px;
        }
    `],
    directives: [QuickbookComponent]
})

export class AppComponent { }