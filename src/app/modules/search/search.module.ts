import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {SearchComponent} from './search.component';
import {AppRoutingModule} from './search.routes';

console.log('lazy loaded');

@NgModule({
	declarations: [
		SearchComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	// providers: [],
	// bootstrap: [SearchComponent]
})
export class SearchModule {
}
