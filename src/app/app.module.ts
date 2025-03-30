import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { BookingModule } from './booking/booking.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    HomeModule,
    SearchModule,
    BookingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
