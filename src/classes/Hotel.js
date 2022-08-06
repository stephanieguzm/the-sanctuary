class Hotel {
  constructor(bookingsData, roomsData, customersData) {
    this.bookings = bookingsData;
    this.rooms = roomsData;
    this.customers = customersData; 
    this.currentCustomer = {};
    // this.availableRooms = [];
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
// look at booking and rooms data sets
// if a room number matches booking room number 
// look at the booking date
//if that booking date === variable requestedDate,
// then that room is not available
// return any rooms that do not match today's date

//Step 1:
// match up bookings.roomNumber with rooms.number
// if they are the same, then add those bookings to a new array
    // const availableRooms = [];
    // const matchRoomNumbers = this.bookings.filter( booking => 
    //   this.rooms.filter( room => 
    //     booking.roomNumber === room.number))
        // console.log(findAvailableRooms)
        // return findAvailableRooms
        //Step 2:
        // then iterate over that array to determine whether the bookings.date matches requestedDate
    const matchRoomNumbers = this.rooms.filter(room =>
      this.bookings.filter(booking =>
        room.number === booking.roomNumber))
    console.log(matchRoomNumbers)
        return matchRoomNumbers

    // const findBookingAvailability = matchRoomNumbers.reduce( (total, booking) => {
    //   if (!booking.date === requestedDate) {
    //     total += 
    //   }

    // }, []);
        // if the bookingDate does match, then throw error message
        //if the bookingDate doesn't match, then add booking to a new array
  }

// reduce is an option since we need to create a new array of bookings

//filter can also filter based on our conditions for both steps


  //method: retrieve all available rooms by room type
  // filterByRoomType() {

  // }


// method: add new booking for customer






}

export default Hotel;