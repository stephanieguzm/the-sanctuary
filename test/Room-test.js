import { expect } from 'chai';

import Room from '../src/classes/Room'

import roomsData from '../src/data/rooms-sample-data';

describe('Room', () => {
  let room1;
  let room2;

  beforeEach(() => {
    room1 = new Room(roomsData[1]);
    room2 = new Room(roomsData[3]);
  });

  it('should be a function', () => {
    expect(Room).to.be.a('function');
  });

  it('should be an instance of Room', () => {
    expect(room1).to.be.an.instanceOf(Room);
    expect(room2).to.be.an.instanceOf(Room);
  });

  it('should have a room number', () => {
    expect(room1.number).to.equal(11);
    expect(room2.number).to.equal(15);
  });

  it('should have a room type', () => {
    expect(room1.roomType).to.equal('single room');
    expect(room2.roomType).to.equal('residential suite');
  });

  it('should show whether the room has a bidet or not', () => {
    expect(room1.bidet).to.equal(true);
    expect(room2.bidet).to.equal(false);
  });

  it('should have a bed size', () => {
    expect(room1.bedSize).to.equal('twin');
    expect(room2.bedSize).to.equal('full');
  });

  it('should have number of beds', () => {
    expect(room1.numBeds).to.equal(2);
    expect(room2.numBeds).to.equal(1);
  });

  it('should have a cost per night', () => {
    expect(room1.costPerNight).to.equal(207.24);
    expect(room2.costPerNight).to.equal(294.56);
  });
});