import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreLibModule } from 'core-lib'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
