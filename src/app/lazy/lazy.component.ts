import { Component } from '@angular/core';


@Component({
  selector: 'lazy',
  template: `
    <div (click)="click()">click to expand</div>
    <div *ngIf="visible">some long description</div>
  `,
})
export class LazyComponent {
  static selector = 'lazy';
  visible = false;
  public click() {
    this.visible = !this.visible;
  }
}
