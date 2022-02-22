import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent}
];

const routerOptions: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled', onSameUrlNavigation: 'reload',
  paramsInheritanceStrategy: 'emptyOnly'
  // ...any other options you'd like to use
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
