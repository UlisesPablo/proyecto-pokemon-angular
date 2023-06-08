import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WorkingComponent } from './components/working/working.component';




const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'welcome', component: WelcomeComponent},
  { path:'working', component: WorkingComponent},
  { path:'', pathMatch: 'full', redirectTo: 'welcome'},
  // { path: 'navbar', component: NavbarComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
