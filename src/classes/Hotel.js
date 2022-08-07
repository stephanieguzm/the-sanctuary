class Hotel {
  constructor(bookingsData, roomsData, customersData) {
    this.bookings = bookingsData;
    this.rooms = roomsData;
    this.customers = customersData; 
    this.currentCustomer = {};
    this.availableRooms = [];
  }
  //method: find current customer - retrieve customerData 
  findCurrentCustomer(customerID) {
    this.currentCustomer = this.customers.find(customer => customer.id === customerID);
  }

  // method: retrieve all room types
  findRoomTypes() {
    const roomTypes = [];
    const getRoomTypes = this.rooms.forEach((room) => {
      if (!roomTypes.includes(room.roomType)) {
        roomTypes.push(room.roomType)
      }
    })
    return roomTypes
  }
  //filter rooms by date
  findAvailableRooms(requestedDate) {
    const unavailableRooms = this.bookings.reduce( (total, booking) => {
      if (booking.date === requestedDate) {
        total.push(booking.roomNumber)
      }
      return total
    }, [])

    this.availableRooms = this.rooms.filter(room => {
      return !unavailableRooms.includes(room.number)
      })
    return this.availableRooms
  }

  // method: retrieve all available rooms by room type
  findAvailableRoomTypes() {
    const availableRoomTypes = [];
    const getRoomTypes = this.availableRooms.forEach((room) => {
      if (!availableRoomTypes.includes(room.roomType)) {
        availableRoomTypes.push(room.roomType)
      }
    })
    return availableRoomTypes
  }

// method: add new booking for customer


}

export default Hotel;