import { Routes } from "@angular/router";
import { FlightEditComponent, FlightSearchComponent } from "./features";

export const FLIGHT_BOOKING_ROUTES: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'search',
      pathMatch: 'full'
    },
    {
      path: 'search',
      component: FlightSearchComponent
    },
    {
      path: 'edit/:id',
      component: FlightEditComponent
    }
  ]
}];
