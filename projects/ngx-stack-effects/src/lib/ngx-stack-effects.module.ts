import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxStackEffectsComponent } from './ngx-stack-effects.component';
import { NgxStackItemComponent } from './ngx-stack-item.component';


@NgModule({
  declarations: [NgxStackEffectsComponent, NgxStackItemComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxStackEffectsComponent, NgxStackItemComponent]
})
export class NgxStackEffectsModule { }
