import { Component } from '@angular/core';
import { SearchFacade } from '../domain-logic/application/search.facade';
import { Passenger } from '../domain-logic/entities/passenger';

@Component({
  selector: 'passenger-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  firstname = '';
  name = 'Smith';
  passengerList$ = this.searchFacade.passengerList$;
  selectedPassenger: Passenger | undefined;

  constructor(private searchFacade: SearchFacade) {}

  load(): void {
    this.searchFacade.load(this.name, this.firstname);
  }

  toggleSelection(p: Passenger) {
    this.selectedPassenger = p;
  }
}
