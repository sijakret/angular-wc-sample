import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Component, Input, Directive, HostBinding, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import './my-prefix-custom-element';


// angular component
@Component({
  selector: 'component-exists',
  template: `<b style="color: rgba(0,0,255,1)">ANGULAR COMPONENT: {{name}} - number {{numprop}}</b>`,
})
export class ComponentExists {
  @Input() name:string = 'default'
  @Input('numprop') numprop:number = -1000
}

@Directive({ selector: '[clamp]' })
export class ClampDirective {
  @Input() min = 1;
  @Input() max = 11;
  @Input() value = 0;

  @HostBinding()
  get numprop(): number {
    return Math.min(Math.max(this.value, this.min), this.max);
  }
}



@NgModule({
  declarations: [
    AppComponent,
    ClampDirective,
    ComponentExists
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


