import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [
    AppComponent,
    // SearchComponent,
    // BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    HomeModule,
    SearchModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
