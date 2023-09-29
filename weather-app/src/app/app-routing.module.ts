import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { DetailspageComponent } from './MyComponents/detailspage/detailspage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:"details",component:DetailspageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
