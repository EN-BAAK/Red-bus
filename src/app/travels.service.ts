import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Travel } from '../utils/types';

@Injectable({
  providedIn: 'root',
})
export class TravelsService {
  constructor(private http: HttpClient) {}

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

  getTravels() {
    return this.http.get<Travel[]>('assets/travels.json');
  }
}
