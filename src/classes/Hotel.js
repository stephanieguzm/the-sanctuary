class Hotel {
  constructor(bookingsData, roomsData, customersData) {
    this.bookings = bookingsData;
    this.rooms = roomsData;
    this.customers = customersData; 
    this.currentCustomer = {};
    this.availableRooms = [];
  }

  findCurrentCustomer(customerID) {
    this.currentCustomer = this.customers.find(customer => customer.id === customerID);
  }

  findRoomTypes() {
    const roomTypes = [];
    const getRoomTypes = this.rooms.forEach((room) => {
      if (!roomTypes.includes(room.roomType)) {
        roomTypes.push(room.roomType)
      }
    })
    return roomTypes
  }

  findAvailableRooms(requestedDate) {
    let unavailableRooms = this.bookings.reduce( (total, booking) => {
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

  findAvailableRoomsByType(selectedRoomType) {
    const availableRoomsByType = [];
    const getRoomTypes = this.availableRooms.forEach((room) => {
      if (room.roomType === selectedRoomType) {
        availableRoomsByType.push(room)
      }
    })
    return availableRoomsByType
  }

// method: add new booking for customer

};

export default Hotel;