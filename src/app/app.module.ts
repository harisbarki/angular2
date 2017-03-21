import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {AboutComponent} from './components/about/about.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NoContentComponent} from './components/no-content/no-content.component'
import {routes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavbarComponent,
    NoContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
