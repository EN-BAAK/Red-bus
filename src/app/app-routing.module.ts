import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  // {
  // redirectTo: "search",
  // },
  {
    path: '',
    component: HomeComponent,
  },
  // {
  // path: 'booking',
  // component: BookingComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
