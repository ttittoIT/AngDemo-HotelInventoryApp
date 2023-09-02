import { Component, OnInit } from '@angular/core';
import { Room, RoomsList } from './rooms';
import { provideClientHydration } from '@angular/platform-browser';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  constructor() {}

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms: Room = {
    availableRooms: 10,
    totalRooms: 20,
    bookedRooms: 5,
  };
  roomsList: RoomsList[] = [
    {
      roomNumber: 12,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      checkInTime: new Date(),
      checkOutTime: new Date(),
      photos: 'some picture url',
    },
    {
      roomType: 'Private Suit',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom',
      price: 100,
      checkInTime: new Date(),
      checkOutTime: new Date(),
      photos: 'some picture url',
      roomNumber: 11
    },
  ];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
