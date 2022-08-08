import { expect } from 'chai';

import Customer from '../src/classes/Customer'
import Hotel from '../src/classes/Hotel';

import customersData from '../src/data/customer-sample-data';
import bookingsData from '../src/data/bookings-sample-data';
import roomsData from '../src/data/rooms-sample-data';

describe('Customer', () => {
  let customer1;
  let customer3;
  let hotel;

  beforeEach( () => {
    customer1 = new Customer(customersData[0]);
    customer3 = new Customer(customersData[2]);
    hotel = new Hotel(bookingsData, roomsData)
  });

  it('should be a function', () => {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', () => {
    expect(customer1).to.be.an.instanceOf(Customer);
    expect(customer3).to.be.an.instanceOf(Customer);
  });

  it('should have an id', () => {
    expect(customer1.id).to.equal(1);
    expect(customer3.id).to.equal(3);
  });

  it('should have a name', () => {
    expect(customer1.name).to.equal('Leatha Ullrich');
    expect(customer3.name).to.equal('Kelvin Schiller');
  });

  it('should be able to retrieve all bookings for customer', () => {
    customer1.filterBookings(hotel);

    expect(customer1.bookings).to.be.an('array')
    expect(customer1.bookings.length).to.equal(6);
    expect(customer1.bookings).to.deep.equal([
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
        id: "5fwrgu4i7k55hl7l5",
        userID: 1,
        date: "2022/02/20",
        roomNumber: 3
      }
    ]);
  });
  
  it('should be able to store past bookings for customer', () => {
    const todaysDate = '2022/08/04';

    customer1.filterBookings(hotel);
    customer1.filterBookingsByDate(todaysDate);
    
    expect(customer1.pastBookings).to.deep.equal([
      {
        id: "5fwrgu4i7k55hl6t8",
        userID: 1,
        date: "2022/02/05",
        roomNumber: 12
      },
      {
        id: "5fwrgu4i7k55hl72q",
        userID: 1,
        date: "2022/01/19",
        roomNumber: 19
      },
      {
        id: "5fwrgu4i7k55hl7l5",
        userID: 1,
        date: "2022/02/20",
        roomNumber: 3
      }
    ]);
  });
  
  it('should be able to store upcoming bookings for customer', () => {
    const todaysDate = '2022/08/04';

    customer1.filterBookings(hotel);
    customer1.filterBookingsByDate(todaysDate);
    expect(customer1.upcomingBookings).to.deep.equal([
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
      }
    ]);
  });

  it('should be able to calculate the total amount customer has spent on bookings', () => {
    customer1.filterBookings(hotel)
    customer1.calculateTotalAmountSpent(hotel);

    expect(customer1.totalAmountSpent).to.equal(2026.72)
  });
});

