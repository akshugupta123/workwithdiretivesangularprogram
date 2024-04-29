import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadonlyDirective } from './readonly.directive';
import { NoWhitespaceDirective } from './no-whitespace.directive';
import { OnlyNumberDirective } from './only-number.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReadonlyDirective,
    NoWhitespaceDirective,
    OnlyNumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
