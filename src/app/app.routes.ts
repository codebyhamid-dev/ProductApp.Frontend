import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/booking-list/booking-list.component').then(
        (m) => m.BookingListComponent
      ),
  },
];
