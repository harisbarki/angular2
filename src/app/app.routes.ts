import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {AboutComponent} from './components/about/about.component'
import {AppComponent} from './app.component'
import {NoContentComponent} from './components/no-content/no-content.component'

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search', loadChildren: './components/search/search.module#SearchModule'},
  {path: '**', component: NoContentComponent}
];

export const routes = RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules });
