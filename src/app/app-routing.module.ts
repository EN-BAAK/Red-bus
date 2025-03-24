import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
    // redirectTo: "search",
  // },
  {
    path: 'search',
    // component: SearchComponent,
  },
  {
    path: 'booking',
    // component: BookingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
