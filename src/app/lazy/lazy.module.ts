import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {downgradeComponent} from '@angular/upgrade/static';
import {LazyComponent} from './lazy.component';
import * as angular from 'angular';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LazyComponent
  ],
  entryComponents: [
    LazyComponent
  ],
  providers: [
    { provide: 'LAZY_NG_MODULES', useValue: ['lazy'] }
  ]
})
export class LazyModule {
  constructor() {
    console.info('lazy module ready');
  }
}

angular.module('lazy', [])
  .directive('lazy', downgradeComponent({component: LazyComponent}));
