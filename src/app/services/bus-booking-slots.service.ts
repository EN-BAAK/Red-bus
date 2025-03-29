import { Injectable } from '@angular/core';
import { TravelsService } from './travels.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  forkJoin,
  map,
  Observable,
  tap,
  throwError,
} from 'rxjs';
import { BusBookingSlot, TravelRoute } from '../../utils/types';

@Injectable({
  providedIn: 'root',
})
export class BusBookingSlotsService {
  constructor(
    private http: HttpClient,
    private travelServices: TravelsService
  ) {}

  private busBookingSlotsSubject = new BehaviorSubject<TravelRoute[]>([]);
  private busBookingSlots$ = this.busBookingSlotsSubject.asObservable();

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0)
      console.error(
        'Internal Error msg:\t',
        'There is an issue with the client or network',
        error.error
      );
    else
      console.error('Internal Error msg:\t', 'Server-side error', error.error);

    return throwError(
      () => new Error('Cannot retrieve wishes from the server, plz try again')
    );
  }

  getBusBookingSlots(): Observable<TravelRoute[]> {
    if (
      !this.busBookingSlotsSubject.value ||
      !this.busBookingSlotsSubject.value.length
    ) {
      return forkJoin([
        this.travelServices.getTravels(),
        this.http.get<BusBookingSlot[]>('assets/busBookingSlots.json'),
      ]).pipe(
        map(([travels, busBookingSlots]) => {
          const travelBus: TravelRoute[] = busBookingSlots.map((slot) => {
            const travel = travels.find((t) => t.id === slot.travelId);
            if (travel) {
              return {
                ...slot,
                name: travel.name,
              };
            } else {
              return {
                ...slot,
                name: 'Unknown',
              };
            }
          });
          return travelBus;
        }),
        tap((data: TravelRoute[]) => this.busBookingSlotsSubject.next(data)),
        catchError(this.handleError)
      );
    } else {
      return this.busBookingSlots$;
    }
  }
}
