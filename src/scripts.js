// An example of how you tell webpack to use a CSS (SCSS) file
import '../dist/bundle.js';
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/logo.png'
import './images/courtyard.png'
import './images/residential-suite.png'
import './images/suite.png'
import './images/junior-suite.png'
import './images/single.png'

import getData from './api-calls';
import Booking from '../src/classes/Booking';
import Hotel from '../src/classes/Hotel'; 
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';

const userDashboard = document.querySelector('.user-dashboard-section');
const reservationsButton = document.querySelector('.view-dashboard-button');
const checkInDateInput = document.querySelector('#checkInDate');
const bookingsMessage = document.querySelector('.all-bookings');
const bookingsDetails = document.querySelector('.all-bookings-details')
const upcomingBookingsSection = document.querySelector('.upcoming-bookings-section');
const pastBookingsSection = document.querySelector('.past-bookings-section');
const pastBookingsContainer = document.querySelector('.past-bookings');
const upcomingBookingsContainer = document.querySelector('.upcoming-bookings');
const bookingStatusContainer = document.querySelector('.booking-status-container');
const checkInAvailabilityContainer = document.querySelector('.check-in-availability-section');
const roomSelection = document.querySelector('#room-selection');

reservationsButton.addEventListener('click', showDashboardView)
checkInDateInput.addEventListener('change', (event) => {
  checkDate(event)
})
roomSelection.addEventListener('change', (event) => {
  checkRoomSelection(event)
})

let checkInDate;
let bookingsData;
let roomsData;
let customersData;
let hotel;
let room;
let currentCustomer;
let currentDate;
let availableRooms;
let selectedRoomType;
let availableRoomsByType;

function checkDate(event) {
  checkInDate = event.target.value.split('-').join('/');
  showBookingsView();
  loadAvailableRooms(checkInDate);
  console.log(checkInDate);
  return checkInDate
};

function checkRoomSelection(event) {
  selectedRoomType = event.target.value;
  loadAvailableRoomsByType(selectedRoomType);
  console.log(selectedRoomType);
  return selectedRoomType
};

Promise.all([
  getData(`http://localhost:3001/api/v1/bookings`),
  getData(`http://localhost:3001/api/v1/rooms`),
  getData(`http://localhost:3001/api/v1/customers`),
])
.then(data => {
  bookingsData = data[0].bookings;
  roomsData = data[1].rooms;
  customersData = data[2].customers;

  hotel = new Hotel(bookingsData, roomsData, customersData);
  currentCustomer = new Customer(customersData[0]);
  currentDate = new Date().toJSON().slice(0, 10).split('-').join('/');

  loadCustomer(hotel);
  generateCustomerBookings();
  console.log(customersData[0]);
  console.log(currentDate);
  }
);

/* ------ Helper Functions ------ */
function hideElement(element) {
  element.classList.add('hidden');
};

function showElement(element) {
  element.classList.remove('hidden');
};

function loadCustomer() {
  currentCustomer.filterBookings(hotel);
  currentCustomer.filterBookingsByDate(currentDate);
  returnTotalSpent();
  console.log('all bookings', currentCustomer.bookings);
};

function generateCustomerBookings() {
  generatePastBookingCard();
  generateUpcomingBookingCard();
};

/* ------ Page Views ------ */
function showDashboardView() {
  showElement(pastBookingsSection);
  showElement(upcomingBookingsSection);
  hideElement(reservationsButton)
};

function showBookingsView() {
  hideElement(pastBookingsSection);
  hideElement(upcomingBookingsSection);
  showElement(reservationsButton);
  showElement(bookingStatusContainer);
};

/* ------ Main Functions ------ */
function returnTotalSpent() {
  const amountSpent = currentCustomer.calculateTotalAmountSpent(hotel);
  bookingsMessage.innerHTML = ``;

  bookingsMessage.innerHTML +=
    `<div role="log" class="all-bookings-details" id="${currentCustomer.id}">
    <h3 class="message-header">Thank you for being a guest at The Sanctuary</h3>
    <p class="message-body">You have spent $${amountSpent.toFixed(2)} on bookings.</p>
  </div>`;
};

function generatePastBookingCard() {
  pastBookingsContainer.innerHTML = ``;

  const pastBookings = currentCustomer.pastBookings;
  return pastBookings.forEach(booking => {
    pastBookingsContainer.innerHTML +=
      `<div role="listitem" class="individual-booking-card">
        <img src="./images/suite.png" class="booking-card" alt="${booking.date} booking">
        <p class="booking-card-message">Date: ${booking.date}</p>
        <p class="booking-card-message">Booking ID: ${booking.id}</p>
      </div>`
  });
};

function generateUpcomingBookingCard() {
  upcomingBookingsContainer.innerHTML = ``;

  return currentCustomer.upcomingBookings.forEach(booking => {
    upcomingBookingsContainer.innerHTML +=
      `<div role="listitem" class="individual-booking-card" id="${booking.id}">
      <img src="./images/suite.png" class="booking-card" alt="${booking.date} booking">
      <p class="booking-card-message">Date: ${booking.date}</p>
      <p class="booking-card-message">Booking ID: ${booking.id}</p>
    </div>`;
  });
};

function getRoomImage(room) {
  if (room.roomType === 'residential suite') {
    room.image = "./images/residential-suite.png";
  } else if (room.roomType === 'suite') {
    room.image = "./images/suite.png";
  } else if (room.roomType === 'junior suite') {
    room.image = "./images/junior-suite.png";
  } else {
    room.image = "./images/single.png";
  }
};

function loadAvailableRooms(checkInDate) {
  availableRooms = hotel.findAvailableRooms(checkInDate);
  console.log('available rooms', availableRooms)
  
  checkInAvailabilityContainer.innerHTML = ``;
  
  availableRooms.forEach(room => {
  // let roomImage = getRoomImage(room);

  checkInAvailabilityContainer.innerHTML +=
    `<div role="listitem" class="available-room-card" id="${room.number}">
   
    <p class="booking-card-message">${room.roomType}</p>
    <p class="booking-card-message">$${room.costPerNight} per night</p>
    <p class="booking-card-message">Beds: ${room.numBeds}</p>
    <p class="booking-card-message">Bed Size: ${room.bedSize}</p>
  </div>`;
  })
    // < img src = "${roomImage}" class="available-room" alt = "Room Number${room.number}" > 
};

function loadAvailableRoomsByType(selectedRoomType) {
  console.log('inside availableroomsbytype', availableRooms)
  availableRoomsByType = hotel.findAvailableRoomsByType(selectedRoomType);

  checkInAvailabilityContainer.innerHTML = ``;

  availableRoomsByType.forEach(room => {
    // let roomImage = getRoomImage(room);

    checkInAvailabilityContainer.innerHTML +=
      `<div role="listitem" class="available-room-card" id="${room.number}">
   
    <p class="booking-card-message">${room.roomType}</p>
    <p class="booking-card-message">$${room.costPerNight} per night</p>
    <p class="booking-card-message">Beds: ${room.numBeds}</p>
    <p class="booking-card-message">Bed Size: ${room.bedSize}</p>
  </div>`;
  })
};

