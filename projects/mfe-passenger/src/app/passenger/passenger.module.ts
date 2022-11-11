import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PassengerComponent } from './passenger.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: PassengerComponent,
    children: [
      {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
      },
      {
        path: 'search',
        loadChildren: () => import('./feature-search/passenger-feature-search.module')
          .then(esm => esm.PassengerFeatureSearchModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./feature-edit/passenger-feature-edit.module')
          .then(esm => esm.PassengerFeatureEditModule)
      }
    ]
  }
];


@NgModule({
  declarations: [PassengerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PassengerModule { }
