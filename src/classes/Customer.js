class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.pastBookings = [];
    this.upcomingBookings = [];
    this.currentBookings = [];
  }  

};



export default Customer;