import { Component, OnInit } from '@angular/core';
import { Slots } from 'src/app/models/slots';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-checkslots',
  templateUrl: './checkslots.component.html',
  styleUrls: ['./checkslots.component.css'],
})
export class CheckslotsComponent implements OnInit {
  currRole: string = '';
  loggedUser: string = '';
  slots: Slots[] = [];

  constructor(private _service: DoctorService) {}

  ngOnInit(): void {
    // Retrieve user and role from session storage directly
    this.loggedUser = sessionStorage.getItem('loggedUser') || '';
    this.currRole = sessionStorage.getItem('ROLE') || '';

    // Fetch the slots data
    this._service.getSlotList().subscribe(
      (data: Slots[]) => {
        console.log('Slot data:', data); // For debugging to see the data structure
        this.slots = data;
      },
      (error) => {
        console.error('Error fetching slot data:', error);
      }
    );
  }
}
