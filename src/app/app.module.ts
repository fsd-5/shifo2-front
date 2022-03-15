import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmenaComponent } from './component/smena/smena.component';
import { XonaComponent } from './component/xona/xona.component';

@NgModule({
  declarations: [
    AppComponent,
    SmenaComponent,
    XonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
