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
        
        @font-face {
            font-family: DFDS-bold;
            src: url(/assets/fonts/dfds-bold.eot);
            src: url(/assets/fonts/dfds-bold.eot?#iefix) format("embedded-opentype"),
            url(/assets/fonts/dfds-bold.woff) format("woff"),
            url(/assets/fonts/dfds-bold.ttf) format("truetype"),
            url(/assets/fonts/dfds-bold.svg#dfds-bold) format("svg");
            font-style: normal
        }

        @font-face {
            font-family: DFDS-light;
            src: url(/assets/fonts/dfds-light.eot);
            src: url(/assets/fonts/dfds-light.eot?#iefix) format("embedded-opentype"),
            url(/assets/fonts/dfds-light.woff) format("woff"),
            url(/assets/fonts/dfds-light.ttf) format("truetype"),
            url(/assets/fonts/dfds-light.svg#dfds_lightregular) format("svg");
            font-weight: 300;
            font-style: normal
        }

        *,
        *:after,
        *:before {
            box-sizing: border-box;
        }
    
        body {
            background-color: #eaedee;
            font-family: 'DFDS-light';
        }
        
        #hero {
            margin: 30px auto;
            width: 1386px;
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