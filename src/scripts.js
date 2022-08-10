import '../dist/bundle.js';
import './css/styles.css';
import './images/logo.png'
import './images/courtyard.png'
import './images/residential-suite.png'
import './images/suite.png'
import './images/junior-suite.png'
import './images/single.png'

import { getData, getCurrentCustomer, checkResponseStatus, generateErrorMessage } from './api-calls';
import Hotel from '../src/classes/Hotel';
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';

const availableRoomCard = document.querySelector(".available-room-card");
const bookingConfirmation = document.querySelector('.booking-confirmation-message');
const bookingsDetails = document.querySelector('.all-bookings-details');
const bookingsMessage = document.querySelector('.all-bookings');
const bookingStatusContainer = document.querySelector('.booking-status-container');
const checkInDateInput = document.querySelector('#checkInDate');
const checkInSection = document.querySelector('.check-in-date-section');
const checkInAvailabilityContainer = document.querySelector('.check-in-availability-section');
const errorMessageSection = document.querySelector('.error-message-section');
const pastBookingsSection = document.querySelector('.past-bookings-section');
const pastBookingsContainer = document.querySelector('.past-bookings');
const reservationsButton = document.querySelector('.view-dashboard-button');
const reserveRoomButton = document.querySelector('.reserve-room-button');
const roomSelection = document.querySelector('#room-selection');
const roomAvailabilityMessage = document.querySelector('.room-availability')
const upcomingBookingsSection = document.querySelector('.upcoming-bookings-section');
const upcomingBookingsContainer = document.querySelector('.upcoming-bookings');
const userDashboard = document.querySelector('.user-dashboard-section');
const loginSection = document.querySelector('.login-section');
const loginForm = document.getElementById("loginForm");
const loginError = document.querySelector('.error-message');
let usernameInput = document.querySelector('[name="userName"]');
let passwordInput = document.querySelector('[name="userPassword"]');

/* ------ Global Variables ------ */

let checkInDate;
let bookingsData;
let roomsData;
let customersData;
let customerData;
let hotel;
let room;
let currentCustomer;
let currentDate;
let availableRooms;
let selectedRoomType;
let availableRoomsByType;
let selectedRoom;
let currentCustomerID;

/* ------ Event Listeners ------ */

checkInAvailabilityContainer.addEventListener('click', handleEvent);
checkInAvailabilityContainer.addEventListener('keyup', handleEvent);
reservationsButton.addEventListener('click', showDashboardView);
checkInDateInput.addEventListener('change', (event) => {
  checkDate(event)
});
roomSelection.addEventListener('change', (event) => {
  checkRoomSelection(event)
});

/* ------ Login Functions ------ */

window.onload = pageLoad();

function pageLoad() {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    loginPageView();
    validateCredentials();
    customerLogin();
  })
};

function customerLogin() {
  getCurrentCustomer(currentCustomerID)
  .then(data => {
    customerData = data;
    currentCustomer = new Customer(customerData)
    fetchAllData();
  })
};

function validateCredentials() {
  const customerIDString = usernameInput.value.substring(8);

  if (usernameInput.value === `customer${customerIDString}` && passwordInput.value === 'overlook2021') {
    currentCustomerID = parseInt(customerIDString)
    loginError.innerText = '';
    return currentCustomerID

  } else {
    loginError.innerText = `We encountered an error logging you into this application. Please try again.`
    usernameInput.value = '';
    passwordInput.value = '';
  }
};

/* ------ Event Handlers ------ */

function handleEvent(event) {
  if (event.type === 'click' ||
    event.keyCode === 13) {
    if (event.target.classList.contains('reserve-room-button')) {
      reserveRoom(event)
    }
  }
};

function checkDate(event) {
  checkInDate = event.target.value.split('-').join('/');
  showBookingsView();
  loadAvailableRooms(checkInDate);

  return checkInDate
};

function checkRoomSelection(event) {
  selectedRoomType = event.target.value;
  loadAvailableRoomsByType(selectedRoomType);
  return selectedRoomType
};

function reserveRoom(event) {
  selectedRoom = event.target.id;
  selectedRoom = parseInt(selectedRoom, 10);
  addNewBooking(currentCustomer.id, checkInDate, selectedRoom);
  resetBookingsView();
};

/* ------ Fetch Requests ------ */

function fetchAllData() {
  return Promise.all([
    getData(`http://localhost:3001/api/v1/bookings`),
    getData(`http://localhost:3001/api/v1/rooms`),
    getData(`http://localhost:3001/api/v1/customers`),
    getCurrentCustomer(currentCustomerID)
  ])
    .then(data => {
      bookingsData = data[0].bookings;
      roomsData = data[1].rooms;
      customersData = data[2].customers;

      hotel = new Hotel(bookingsData, roomsData, customersData);
      room = new Room(roomsData);
      currentDate = new Date().toJSON().slice(0, 10).split('-').join('/');
      
      loadDashboard();
    }
  );
};

function addNewBooking(id, date, roomNum) {
  return fetch(`http://localhost:3001/api/v1/bookings`, {
    method: 'POST',
    body: JSON.stringify({
      "userID": id,
      "date": date,
      "roomNumber": roomNum
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => checkResponseStatus(response))
    .then(data => data)
    .then(() => fetch(`http://localhost:3001/api/v1/bookings`))
    .then(response => checkResponseStatus(response))
    .then(data => {
      hotel.bookings = data.bookings;
    })
    .then(() => {
      loadDashboard()
    })
    .catch(error => generateErrorMessage(error))
};

/* ------ Helper Functions ------ */

function hideElement(element) {
  element.classList.add('hidden');
};

function showElement(element) {
  element.classList.remove('hidden');
};

function loadDashboard() {
  hideLoginView();
  loadAllBookings();
  generateCustomerBookings();
};

function loadAllBookings() {
  currentCustomer.filterBookings(hotel);
  currentCustomer.filterBookingsByDate(currentDate);
  returnTotalSpent();
};

function generateCustomerBookings() {
  generatePastBookingCard();
  generateUpcomingBookingCard();
};

/* ------ Page Views ------ */

function loginPageView() {
  hideElement(userDashboard);
  showElement(loginSection);
};

function hideLoginView() {
  showElement(userDashboard);
  hideElement(loginSection);
};

function showDashboardView() {
  hideElement(reservationsButton);
  hideElement(bookingConfirmation);
  showElement(pastBookingsSection);
  showElement(upcomingBookingsSection);
  showElement(checkInSection)
  showElement(bookingsMessage);

  checkInDateInput.value = '';
};

function showBookingsView() {
  hideElement(pastBookingsSection);
  hideElement(upcomingBookingsSection);
  showElement(reservationsButton);
  showElement(bookingStatusContainer);
  hideElement(bookingsMessage);
};

function resetBookingsView() {
  hideElement(pastBookingsSection);
  hideElement(upcomingBookingsSection);
  hideElement(bookingsMessage);
  hideElement(bookingStatusContainer);
  showElement(reservationsButton);
  showElement(bookingConfirmation);
  hideElement(checkInSection)
  
  checkInDateInput.value = '';
  roomSelection.value = '';
};

/* ------------ */

function returnTotalSpent() {
  const amountSpent = currentCustomer.calculateTotalAmountSpent(hotel);
  bookingsMessage.innerHTML = ``;

  bookingsMessage.innerHTML += `
    <div role="log" class="all-bookings-details" id="${currentCustomer.id}">
      <h2 class="message-header" tabindex="0">Thank you for being a guest at The Sanctuary</h2>
      <p class="message-body" tabindex="0">You have spent $${amountSpent.toFixed(2)} on bookings.</p>
    </div>`;
};

function generatePastBookingCard() {
  pastBookingsContainer.innerHTML = ``;

  const pastBookings = currentCustomer.pastBookings;
  return pastBookings.forEach(booking => {
    pastBookingsContainer.innerHTML += `
      <div role="listitem" class="individual-booking-card">
        <img src="./images/suite.png" class="booking-card" alt="${booking.date} booking">
        <p class="booking-card-message" tabindex="0">Date: ${booking.date}</p>
        <p class="booking-card-message" tabindex="0">Booking ID: ${booking.id}</p>
      </div>`
  });
};

function generateUpcomingBookingCard() {
  upcomingBookingsContainer.innerHTML = ``;

  return currentCustomer.upcomingBookings.forEach(booking => {
    upcomingBookingsContainer.innerHTML += `
      <div role="listitem" class="individual-booking-card" id="${booking.id}">
      <img src="./images/suite.png" class="booking-card" alt="${booking.date} booking">
      <p class="booking-card-message" tabindex="0">Date: ${booking.date}</p>
      <p class="booking-card-message" tabindex="0">Booking ID: ${booking.id}</p>
    </div>`;
  });
};

function loadAvailableRooms(checkInDate) {
  availableRooms = hotel.findAvailableRooms(checkInDate);

  if (!availableRooms.length) {
    roomAvailabilityMessage.innerHTML = ``;
    roomAvailabilityMessage.innerHTML = `
    <h2 class="message-header" tabindex="0">We're very sorry! No rooms are available on your selected date.</h2>`
    roomSelection.value = '';
  } else {
    checkInAvailabilityContainer.innerHTML = ``;

    roomAvailabilityMessage.innerHTML = ``;
    roomAvailabilityMessage.innerHTML = `
        <h2 class="message-header" tabindex="0">${availableRooms.length} rooms available for your selected date</h2>`

    availableRooms.forEach(room => {
      checkInAvailabilityContainer.innerHTML += `
      <div role="listitem" class="available-room-card" id="${room.number}">
      <p class="booking-card-message" tabindex="0">${room.roomType}</p>
      <p class="booking-card-message" tabindex="0">Cost per Night: $${room.costPerNight}</p>
      <p class="booking-card-message" tabindex="0">Beds: ${room.numBeds}</p>
      <p class="booking-card-message" tabindex="0">Bed Size: ${room.bedSize}</p>
      <p class="booking-card-message" tabindex="0">Bidet in Room: ${room.bidet}</p>
      <button type="button" class="reserve-room-button" id="${room.number}" tabindex="0">Reserve Room</button>
      </div>`;
    })
  }
};

function loadAvailableRoomsByType(selectedRoomType) {
  availableRoomsByType = hotel.findAvailableRoomsByType(selectedRoomType);
  checkInAvailabilityContainer.innerHTML = ``;

  if (!availableRoomsByType.length) {
    roomAvailabilityMessage.innerHTML = ``;
    roomAvailabilityMessage.innerHTML = `
    <h2 class="message-header" tabindex="0">We're very sorry! No rooms are available on your selected date.</h2>`
    roomSelection.value = '';
  } else {
    availableRoomsByType.forEach(room => {

      roomAvailabilityMessage.innerHTML = ``;
      roomAvailabilityMessage.innerHTML = `
        <h2 class="message-header" tabindex="0">${availableRoomsByType.length} ${room.roomType}s available for your selected date</h2>`
      roomSelection.value = '';
      
      checkInAvailabilityContainer.innerHTML += `
        <div role="listitem" class="available-room-card" id="${room.number}">
          <p class="booking-card-message" tabindex="0">${room.roomType}</p>
          <p class="booking-card-message" tabindex="0">Cost per Night: $${room.costPerNight}</p>
          <p class="booking-card-message" tabindex="0">Beds: ${room.numBeds}</p>
          <p class="booking-card-message" tabindex="0">Bed Size: ${room.bedSize}</p>
          <p class="booking-card-message" tabindex="0">Bidet in Room: ${room.bidet}</p>
          <button type="button" class="reserve-room-button" id="${room.number}" tabindex="0">Reserve Room</button>
        </div>`;
    })
  }
};

