import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { downgradeComponent } from '@angular/upgrade/static';
import { LazyModuleLoader } from './lazy-module-loader.service';
import * as angular from 'angular';
import { provideRoutes } from '@angular/router';
import { RootComponent } from './root/root.component';

const lazyModulePath = './lazy/lazy.module#LazyModule';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    RootComponent
  ],
  entryComponents: [
    RootComponent
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    { provide: LazyModuleLoader, useFactory: (i: any) => i.get('LazyModuleLoader'), deps: ['$injector'] },

    provideRoutes([{ path: 'lazy', loadChildren: lazyModulePath }])
  ]
})
export class AppModule {
  public static ModuleName = 'app';
  constructor(
    injector: Injector,
    factoryLoader: NgModuleFactoryLoader,
    lazyLoader: LazyModuleLoader
  ) {
    // setup angularjs service so that it would be able to load other modules
    lazyLoader.init(factoryLoader, injector);
  }
  ngDoBootstrap() {

  }
}

const app = angular.module(AppModule.ModuleName, ['ngRoute']);
app.service('LazyModuleLoader', LazyModuleLoader);
// make sure that angular module is bootstrapped initially
app.directive('appRoot', downgradeComponent({ component: RootComponent }));

const injectModuleRef = (ref?) => angular.element(document.querySelector('body')).data('$$$angularInjectorController', ref);

app.run(['$rootScope', 'LazyModuleLoader', ($rootScope, lazyModuleLoader) => {
  $rootScope.$on('$routeChangeStart', (ev, next) => {
    injectModuleRef(next.$$route && next.$$route.modulePath ? lazyModuleLoader.get(next.$$route.modulePath) : undefined);
  });
}]);

app.config(['$routeProvider', ($routeProvider) => {
  $routeProvider.when('/lazy', {
    template: '<lazy>loading lazy</lazy>',
    modulePath: lazyModulePath,
    resolve: {
      moduleRef: ['LazyModuleLoader', (loader: LazyModuleLoader) => {
        return loader.load(lazyModulePath)
          .then(injectModuleRef)
          .catch((err) => {
            console.error(err);
          });
      }]
    }
  });
  $routeProvider.otherwise({
    template: '<a href="#!/lazy">go to lazy loaded module</a>'
  });
}]);
