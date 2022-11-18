import { loadRemoteModule } from '@angular-architects/module-federation';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight',
    loadChildren: () => import('@mfe-monorepo/mfe-flight')
      .then(esm => esm.FLIGHT_BOOKING_ROUTES)
  },
  {
    path: 'passenger',
    loadChildren: () => loadRemoteModule<{ PassengerModule: any }>({
      type: 'manifest',
      remoteName: 'mfePassenger',
      exposedModule: './module'
    }).then(esm => esm.PassengerModule)
  },
  {
    path: 'booking',
    component: WebComponentWrapper,
    data: {
      type: 'manifest',
      remoteName: 'mfeBooking',
      exposedModule: './rootapp',
      elementName: 'ce-booking-root'
    } as WebComponentWrapperOptions
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
