// import Hotel from './Hotel'

class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
    this.pastBookings = [];
    this.upcomingBookings = [];
    this.currentBookings = [];
    this.totalAmountSpent = 0;
  };

  filterBookings(hotel) {
    this.bookings = hotel.bookings.filter(booking => booking.userID === this.id)
    return this.bookings;
  };

  filterBookingsByDate(todaysDate) {
    this.bookings.forEach( booking => {
      if (booking.date < todaysDate) {
        this.pastBookings.push(booking)
      } else if (booking.date === todaysDate) {
        this.currentBookings.push(booking)
      } else if (booking.date > todaysDate) {
        this.upcomingBookings.push(booking)
      }
    })
  };

  calculateTotalAmountSpent() {
    //iterate over this.bookings to tap into the roomNumber property
    //then go to the Room class and 
  }

};



export default Customer;