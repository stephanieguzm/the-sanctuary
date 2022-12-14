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

};

export default Hotel;