webpackJsonp(["lazy.module"],{

/***/ "../../../../../src/app/lazy/lazy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LazyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LazyComponent = /** @class */ (function () {
    function LazyComponent() {
        this.visible = false;
    }
    LazyComponent.prototype.click = function () {
        this.visible = !this.visible;
    };
    LazyComponent.selector = 'lazy';
    LazyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'lazy',
            template: "\n    <div (click)=\"click()\">click to expand</div>\n    <div *ngIf=\"visible\">some long description</div>\n  ",
        })
    ], LazyComponent);
    return LazyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/lazy/lazy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_upgrade_static__ = __webpack_require__("../../../upgrade/esm5/static.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lazy_component__ = __webpack_require__("../../../../../src/app/lazy/lazy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular__ = __webpack_require__("../../../../angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LazyModule = /** @class */ (function () {
    function LazyModule() {
        console.info('lazy module ready');
    }
    LazyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__lazy_component__["a" /* LazyComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__lazy_component__["a" /* LazyComponent */]
            ],
            providers: [
                { provide: 'LAZY_NG_MODULES', useValue: ['lazy'] }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], LazyModule);
    return LazyModule;
}());

__WEBPACK_IMPORTED_MODULE_4_angular__["module"]('lazy', [])
    .directive('lazy', Object(__WEBPACK_IMPORTED_MODULE_2__angular_upgrade_static__["a" /* downgradeComponent */])({ component: __WEBPACK_IMPORTED_MODULE_3__lazy_component__["a" /* LazyComponent */] }));


/***/ })

});
//# sourceMappingURL=lazy.module.chunk.js.map