import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { SearchComponent } from './search.component';
import { PassengerDomainModule } from '../domain-logic/passenger-domain.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: SearchComponent
      }
    ]),
    LetModule,
    PassengerDomainModule
  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class PassengerFeatureSearchModule {}
