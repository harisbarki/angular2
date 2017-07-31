import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent, HomeComponent, NoContentComponent, LoginComponent} from './components/'

const routes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'about', component: AboutComponent},
	{path: 'login', component: LoginComponent},
	{path: 'search', loadChildren: './modules/search/search.module#SearchModule'},
	{path: '**', component: NoContentComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule],
})
export class AppRoutingModule {
}
