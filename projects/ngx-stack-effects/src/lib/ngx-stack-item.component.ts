import { Component, OnInit, ElementRef, Renderer2, OnDestroy } from '@angular/core';

@Component({
  selector: 'ngx-stack-item',
  template: '<ng-content></ng-content>',
  styles: [`
  :host {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
  }`]
})
export class NgxStackItemComponent implements OnInit, OnDestroy {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const className = 'stacker-item';
    this.renderer.addClass(
      this.elementRef.nativeElement,
      className
    );
  }

  ngOnDestroy() {}
}
