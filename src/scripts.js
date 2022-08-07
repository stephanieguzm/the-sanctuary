// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/logo.png'
import './images/courtyard.png'
import './images/residential-suite.png'
import './images/suite.png'
import './images/junior-suite.png'
import './images/single.png'


import Booking from '../src/classes/Booking';
import Hotel from '../src/classes/Hotel'; 
import Customer from '../src/classes/Customer';
import Room from '../src/classes/Room';

const reservationsButton = document.querySelector('#dashboardButton');
const checkInDateInput = document.querySelector('#check-in-date');

checkInDateInput.addEventListener('change', (event) => {
  checkDate(event)
})

let checkInDate;

const checkDate = (event) => {
  checkInDate = event.target.value.split('-').join('/');
  console.log(checkInDate)
  return checkInDate
}

