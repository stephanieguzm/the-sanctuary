import { expect } from 'chai';

import Hotel from '../src/classes/Hotel'

import bookingsData from '../src/data/bookings-sample-data';
import customersData from '../src/data/customer-sample-data';
import roomsData from '../src/data/rooms-sample-data';

describe('Hotel', () => {
  let hotel;

  beforeEach(() => {
    hotel = new Hotel(bookingsData, roomsData);
  });

  it('should be a function', () => {
    expect(Hotel).to.be.a('function');
  });

  it('should be an instance of Hotel', () => {
    expect(hotel).to.be.an.instanceOf(Hotel);
  });

  it('should store all bookings', () => {
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
        date: "2023/02/20",
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
    ])
  });

  it('should store all room types', () => {
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
      }
    ])
  })
})