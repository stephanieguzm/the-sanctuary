import { expect } from 'chai';

import Hotel from '../src/classes/Hotel'

import bookingsData from '../src/data/bookings-sample-data';
import customersData from '../src/data/customer-sample-data';
import roomsData from '../src/data/rooms-sample-data';

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(bookingsData, roomsData, customersData);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should store all bookings', () => {
    expect(hotel).to.have.a.property('bookings');
    expect(hotel.bookings).to.be.an('array');
    expect(hotel.bookings.length).to.equal(11);
    expect(hotel.bookings).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6t8",
        userID: 1,
        date: "2022/02/05",
        roomNumber: 12
      },
      {
        id: "5fwrgu4i7k55hl6x8",
        userID: 1,
        date: "2023/01/11",
        roomNumber: 20
      },
      {
        id: "5fwrgu4i7k55hl727",
        userID: 1,
        date: "2022/11/06",
        roomNumber: 22
      },
      {
        id: "5fwrgu4i7k55hl72h",
        userID: 1,
        date: "2023/12/22",
        roomNumber: 15
      },
      {
        id: "5fwrgu4i7k55hl72q",
        userID: 1,
        date: "2022/01/19",
        roomNumber: 19
      },
      {
        id: "5fwrgu4i7k55hl74i",
        userID: 3,
        date: "2023/01/13",
        roomNumber: 15
      },
      {
        id: "5fwrgu4i7k55hl76o",
        userID: 3,
        date: "2023/01/13",
        roomNumber: 14
      },
      {
        id: "5fwrgu4i7k55hl7a6",
        userID: 3,
        date: "2022/02/02",
        roomNumber: 16
      },
      {
        id: "5fwrgu4i7k55hl7aa",
        userID: 3,
        date: "2023/02/14",
        roomNumber: 20
      },
      {
        id: "5fwrgu4i7k55hl7d9",
        userID: 3,
        date: "2022/02/15",
        roomNumber: 2
      },
      {
        id: "5fwrgu4i7k55hl7l5",
        userID: 1,
        date: "2022/02/20",
        roomNumber: 3
      }
    ])
  });

  it('should store all rooms', () => {
    expect(hotel).to.have.a.property('rooms');
    expect(hotel.rooms).to.be.an('array');
    expect(hotel.rooms.length).to.equal(16);
    expect(hotel.rooms).to.deep.equal([
      {
        number: 10,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64
      },
      {
        number: 11,
        roomType: "single room",
        bidet: true,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 207.24
      },
      {
        number: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 172.09
      },
      {
        number: 15,
        roomType: "residential suite",
        bidet: false,
        bedSize: "full",
        numBeds: 1,
        costPerNight: 294.56
      },
      {
        number: 16,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 325.6
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17
      },
      {
        number: 6,
        roomType: "junior suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 397.02
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26
      },
      {
        number: 18,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 2,
        costPerNight: 496.41
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14
      },
      {
        number: 20,
        roomType: "residential suite",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 343.95
      },
      {
        number: 22,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 350.31
      },
      {
        number: 19,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 374.67
      },
      {
        number: 14,
        roomType: "residential suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 457.88
      },
    ])
  });

  it('should store all customers', () => {
    expect(hotel).to.have.a.property('customers');
    expect(hotel.customers).to.be.an('array');
    expect(hotel.customers.length).to.equal(5);
    expect(hotel.customers).to.deep.equal([
      {
        id: 1,
        name: "Leatha Ullrich"
      },
      {
        id: 2,
        name: "Rocio Schuster"
      },
      {
        id: 3,
        name: "Kelvin Schiller"
      },
      {
        id: 4,
        name: "Kennedi Emard"
      },
      {
        id: 5,
        name: "Rhiannon Little"
      }
    ])
  });

  it('should find the current customer by customer ID', () => {
    expect(hotel).to.have.a.property('currentCustomer');
    
    hotel.findCurrentCustomer(1);

    expect(hotel.currentCustomer.id).to.equal(1);
    expect(hotel.currentCustomer.name).to.equal('Leatha Ullrich');

  });

  it('should find all available rooms by date', () => {
    const requestedDate = '2023/01/13';
    expect(hotel).to.have.a.property('availableRooms');
    expect(hotel.availableRooms).to.be.an('array');

    hotel.findAvailableRooms(requestedDate);

    expect(hotel.availableRooms.length).to.equal(14);
    expect(hotel.availableRooms).to.deep.equal([
      {
        number: 10,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64
      },
      {
        number: 11,
        roomType: "single room",
        bidet: true,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 207.24
      },
      {
        number: 12,
        roomType: "single room",
        bidet: false,
        bedSize: "twin",
        numBeds: 2,
        costPerNight: 172.09
      },
      {
        number: 16,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 325.6
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38
      },
      {
        number: 4,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 429.44
      },
      {
        number: 5,
        roomType: "single room",
        bidet: true,
        bedSize: "queen",
        numBeds: 2,
        costPerNight: 340.17
      },
      {
        number: 6,
        roomType: "junior suite",
        bidet: true,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 397.02
      },
      {
        number: 8,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 261.26
      },
      {
        number: 18,
        roomType: "junior suite",
        bidet: false,
        bedSize: "king",
        numBeds: 2,
        costPerNight: 496.41
      },
      {
        number: 3,
        roomType: "single room",
        bidet: false,
        bedSize: "king",
        numBeds: 1,
        costPerNight: 491.14
      },
      {
        number: 20,
        roomType: "residential suite",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 343.95
      },
      {
        number: 22,
        roomType: "single room",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 350.31
      },
      {
        number: 19,
        roomType: "single room",
        bidet: false,
        bedSize: "queen",
        numBeds: 1,
        costPerNight: 374.67
      },
    ]);
  });

  it('should find all available rooms by room type', () => {
    hotel.findAvailableRooms('2023/01/13');
    let availableRoomsByType = hotel.findAvailableRoomsByType('suite');

    expect(availableRoomsByType).to.be.an('array');
    expect(availableRoomsByType.length).to.equal(2);
    expect(availableRoomsByType).to.deep.equal([
      {
        number: 10,
        roomType: "suite",
        bidet: false,
        bedSize: "twin",
        numBeds: 1,
        costPerNight: 497.64
      },
      {
        number: 2,
        roomType: "suite",
        bidet: false,
        bedSize: "full",
        numBeds: 2,
        costPerNight: 477.38
      },
    ]);
  });
})