import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FlightService } from "../../logic";
import { FlightCardComponent } from "../../ui";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    FlightCardComponent
  ],
  selector: 'flight-search',
  templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent {

  from = 'Hamburg'; // in Germany
  to = 'Graz'; // in Austria
  urgent = false;

  get flights() {
    return this.flightService.flights;
  }

  basket: { [id: number]: boolean } = {
    3: true,
    5: true
  };

  constructor(private flightService: FlightService) {
  }

  search(): void {
    if (!this.from || !this.to) return;

    this.flightService.load(this.from, this.to, this.urgent);
  }

  delay(): void {
    this.flightService.delay();
  }
}

