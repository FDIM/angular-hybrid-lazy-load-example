webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./lazy/lazy.module": [
		"../../../../../src/app/lazy/lazy.module.ts",
		"lazy.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_upgrade_static__ = __webpack_require__("../../../upgrade/esm5/static.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_module_loader_service__ = __webpack_require__("../../../../../src/app/lazy-module-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular__ = __webpack_require__("../../../../angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__root_root_component__ = __webpack_require__("../../../../../src/app/root/root.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var lazyModulePath = './lazy/lazy.module#LazyModule';
var AppModule = /** @class */ (function () {
    function AppModule(injector, factoryLoader, lazyLoader) {
        // setup angularjs service so that it would be able to load other modules
        lazyLoader.init(factoryLoader, injector);
    }
    AppModule.prototype.ngDoBootstrap = function () {
    };
    AppModule.ModuleName = 'app';
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__root_root_component__["a" /* RootComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__root_root_component__["a" /* RootComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModuleFactoryLoader */], useClass: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* SystemJsNgModuleLoader */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__lazy_module_loader_service__["a" /* LazyModuleLoader */], useFactory: function (i) { return i.get('LazyModuleLoader'); }, deps: ['$injector'] },
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* provideRoutes */])([{ path: 'lazy', loadChildren: lazyModulePath }])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injector */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModuleFactoryLoader */],
            __WEBPACK_IMPORTED_MODULE_3__lazy_module_loader_service__["a" /* LazyModuleLoader */]])
    ], AppModule);
    return AppModule;
}());

var app = __WEBPACK_IMPORTED_MODULE_4_angular__["module"](AppModule.ModuleName, ['ngRoute']);
app.service('LazyModuleLoader', __WEBPACK_IMPORTED_MODULE_3__lazy_module_loader_service__["a" /* LazyModuleLoader */]);
// make sure that angular module is bootstrapped initially
app.directive('appRoot', Object(__WEBPACK_IMPORTED_MODULE_2__angular_upgrade_static__["a" /* downgradeComponent */])({ component: __WEBPACK_IMPORTED_MODULE_6__root_root_component__["a" /* RootComponent */] }));
var injectModuleRef = function (ref) { return __WEBPACK_IMPORTED_MODULE_4_angular__["element"](document.querySelector('body')).data('$$$angularInjectorController', ref); };
app.run(['$rootScope', 'LazyModuleLoader', function ($rootScope, lazyModuleLoader) {
        $rootScope.$on('$routeChangeStart', function (ev, next) {
            injectModuleRef(next.$$route && next.$$route.modulePath ? lazyModuleLoader.get(next.$$route.modulePath) : undefined);
        });
    }]);
app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/lazy', {
            template: '<lazy>loading lazy</lazy>',
            modulePath: lazyModulePath,
            resolve: {
                moduleRef: ['LazyModuleLoader', function (loader) {
                        return loader.load(lazyModulePath)
                            .then(injectModuleRef)
                            .catch(function (err) {
                            console.error(err);
                        });
                    }]
            }
        });
        $routeProvider.otherwise({
            template: '<a href="#!/lazy">go to lazy loaded module</a>'
        });
    }]);


/***/ }),

/***/ "../../../../../src/app/lazy-module-loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyModuleLoader; });
// working example that was adapted
// https://stackblitz.com/edit/angular-lazy-loading-without-router?file=app%2Fapp.module.ts
var LazyModuleLoader = /** @class */ (function () {
    function LazyModuleLoader($injector, $q) {
        this.$injector = $injector;
        this.$q = $q;
        this.pending = {};
        this.loaded = {};
    }
    LazyModuleLoader.prototype.init = function (loader, injector) {
        this.loader = loader;
        this.newInjector = injector;
        if (this.waitingInit) {
            this.waitingInit.resolve();
            this.waitingInit = undefined;
        }
    };
    LazyModuleLoader.prototype.get = function (value) {
        return this.loaded[this.normalize(value)];
    };
    LazyModuleLoader.prototype.isLoaded = function (value) {
        return !!this.loaded[this.normalize(value)];
    };
    LazyModuleLoader.prototype.load = function (value) {
        var _this = this;
        // support actual module with static fields
        value = this.normalize(value);
        var promise;
        // is module loading?
        if (this.pending[value]) {
            promise = this.pending[value];
        }
        else if (!this.loader) {
            if (!this.waitingInit) {
                this.waitingInit = this.$q.defer();
            }
            promise = this.pending[value] = this.waitingInit.promise.then(function () {
                return _this.loadAndInit(value);
            });
        }
        else if (!this.loaded[value]) {
            // if its not loaded, start loading it and return promise
            promise = this.pending[value] = this.loadAndInit(value);
        }
        else {
            promise = this.$q.resolve(this.loaded[value]);
        }
        return promise;
    };
    LazyModuleLoader.prototype.loadAndInit = function (value) {
        var _this = this;
        return this.loader.load(value).then(function (factory) {
            var module = factory.create(_this.newInjector);
            var lazyModules = module.injector.get('LAZY_NG_MODULES');
            if (lazyModules.length > 0) {
                _this.$injector.loadNewModules(lazyModules);
            }
            _this.loaded[value] = module;
            delete _this.pending[value];
            return module;
        });
    };
    LazyModuleLoader.prototype.loadAndCreateComponent = function (value, viewRef, componentName) {
        return this.load(value).then(function (module) {
            var entryComponentType = module.injector.get(componentName || 'LAZY_NG_MODULES');
            if (entryComponentType) {
                var componentFactory = module.componentFactoryResolver.resolveComponentFactory(entryComponentType);
                viewRef.createComponent(componentFactory);
            }
            return module;
        });
    };
    LazyModuleLoader.prototype.normalize = function (value) {
        if (value && value.Path) {
            value = value.Path;
        }
        return value;
    };
    LazyModuleLoader.$inject = [
        '$injector',
        '$q'
    ];
    return LazyModuleLoader;
}());



/***/ }),

/***/ "../../../../../src/app/root/root.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    root works!\r\n</p>"

/***/ }),

/***/ "../../../../../src/app/root/root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootComponent = /** @class */ (function () {
    function RootComponent() {
    }
    RootComponent.prototype.ngOnInit = function () {
    };
    RootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/root/root.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RootComponent);
    return RootComponent;
}());



/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ng2BootstrapFn", function() { return ng2BootstrapFn; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular__ = __webpack_require__("../../../../angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_route__ = __webpack_require__("../../../../angular-route/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_route___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_route__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_upgrade_static__ = __webpack_require__("../../../upgrade/esm5/static.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");






// Ensure AngularJS destroys itself on hot reloads.
var rootElement = __WEBPACK_IMPORTED_MODULE_1_angular__["element"](document.body);
var oldInjector = rootElement.injector();
if (oldInjector) {
    oldInjector.get('$rootScope').$destroy();
    rootElement.data('$injector', null);
}
var ng2BootstrapFn = function (extraProviders) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])(extraProviders).bootstrapModule(__WEBPACK_IMPORTED_MODULE_5__app_app_module__["a" /* AppModule */]);
};
__WEBPACK_IMPORTED_MODULE_1_angular__["bootstrap"](document.body, [
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_upgrade_static__["b" /* downgradeModule */])(ng2BootstrapFn),
    __WEBPACK_IMPORTED_MODULE_5__app_app_module__["a" /* AppModule */].ModuleName
]);


/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following for the Reflect API. */
// import 'core-js/es6/reflect';
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.

/**
 * Required to support Web Animations `@angular/platform-browser/animations`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map