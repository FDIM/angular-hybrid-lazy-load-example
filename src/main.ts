import './polyfills';

import * as angular from 'angular';
import 'angular-route';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';

// Ensure AngularJS destroys itself on hot reloads.
const rootElement = angular.element(document.body);
const oldInjector = rootElement.injector();
if (oldInjector) {
    oldInjector.get('$rootScope').$destroy();
    rootElement.data('$injector', null);
}

export const ng2BootstrapFn = (extraProviders: any[]) =>
    platformBrowserDynamic(extraProviders).bootstrapModule(AppModule);

angular.bootstrap(document.body, [
    downgradeModule(ng2BootstrapFn),
    AppModule.ModuleName
]);
