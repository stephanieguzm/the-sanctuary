import { expect } from 'chai';

import Customer from '../src/classes/Customer'

import customersData from '../src/data/customer-sample-data';
import bookingsData from '../src/data/bookings-sample-data';


describe('Customer', () => {
  let customer1, customer3;

  beforeEach( () => {
    customer1 = new Customer(customersData[0]);
    customer3 = new Customer(customersData[2]);
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

  it('should be able to store past bookings for customer', () => {
    expect(customer1.pastBookings).to.deep.equal([]);
  });

  it('should be able to store upcoming bookings for customer', () => {
    expect(customer1.upcomingBookings).to.deep.equal([]);
  });

  it('should be able to store current bookings for customer', () => {
    expect(customer1.currentBookings).to.deep.equal([]);
  });

  it('should be able to list past bookings for customer', () => {
    customer1.getPastBookings();
    
    expect(customer1.pastBookings).to.deep.equal([]);
  });
});
