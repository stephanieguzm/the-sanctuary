import { expect } from 'chai';

import Booking from '../src/classes/Booking'

import bookingsData from '../src/data/bookings-sample-data';

describe('Booking', () => {
  let booking1;
  let booking2;
  let booking3;

  beforeEach(() => {
    booking1 = new Booking(bookingsData[1]);
    booking2 = new Booking(bookingsData[3]);
    booking3 = new Booking(bookingsData[6]);
  });

  it('should be a function', () => {
    expect(Booking).to.be.a('function');
  });

  it('should be an instance of Booking', () => {
    expect(booking1).to.be.an.instanceOf(Booking);
    expect(booking3).to.be.an.instanceOf(Booking);
  });

  it('should have a booking id', () => {
    expect(booking2.id).to.be.a('string');
    expect(booking1.id).to.equal('5fwrgu4i7k55hl6x8');
    expect(booking3.id).to.equal('5fwrgu4i7k55hl76o');
  });

  it('should have a customer id', () => {
    expect(booking1.userID).to.equal(1);
    expect(booking3.userID).to.equal(3);
  });

  it('should have a booking date', () => {
    expect(booking2.date).to.equal('2023/12/22');
    expect(booking3.date).to.equal('2023/02/20');
  });

  it('should have a room number', () => {
    expect(booking2.roomNumber).to.equal(15);
    expect(booking3.roomNumber).to.equal(14);
  });
});
