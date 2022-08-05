// import Hotel from './Hotel'

class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
    this.pastBookings = [];
    this.upcomingBookings = [];
    this.currentBookings = [];
  };

  filterBookings(hotel) {
    this.bookings = hotel.bookings.filter(booking => booking.userID === this.id)
    console.log(this.bookings)
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


};



export default Customer;