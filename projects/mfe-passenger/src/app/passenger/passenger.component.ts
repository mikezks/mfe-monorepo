import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'flight-workspace-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {
  ngVersion = VERSION.full;
}
