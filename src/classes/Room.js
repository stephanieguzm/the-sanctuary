class Room {
  constructor(room) {
    this.number = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.numBeds = room.numBeds;
    this.costPerNight = room.costPerNight;
    this.image;
  }

  getRoomImage() {
    if (this.roomType === 'residential suite') {
      this.image = '..images/residential-suite.png';
    } else if (this.roomType === 'suite') {
      this.image = '..images/suite.png';
    } else if (this.roomType === 'junior suite') {
      this.image = '..images/junior-suite.png';
    } else {
      this.image = '..images/single.png';
    }
  }
}

export default Room;


