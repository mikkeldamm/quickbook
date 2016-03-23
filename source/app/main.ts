import {bootstrap} from 'angular2/platform/browser';
import {provideInitialState, hotModuleReplacement} from 'angular2-hmr';
import {DIRECTIVES, PIPES, PROVIDERS} from './platform/browser';
import {ENV_PROVIDERS} from './platform/environment';

import {AppComponent} from './app.component';

export function main(initialState = {}) {
    
    let APP_PROVIDERS = [
        provideInitialState(initialState)
    ];

    return bootstrap(AppComponent, [
        ...ENV_PROVIDERS,
        ...PROVIDERS,
        ...DIRECTIVES,
        ...PIPES,
        ...APP_PROVIDERS,
    ])
    .catch(err => console.error(err));
}

if ('development' === ENV && HMR === true) {
    hotModuleReplacement(main, module);
} else {
    document.addEventListener('DOMContentLoaded', () => main());
}