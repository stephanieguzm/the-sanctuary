var getData = (url) => {
  return fetch(url)
    .then(response => checkResponseStatus(response))
    .catch(error => generateErrorMessage(error))
};

var getCurrentCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => checkResponseStatus(response))
    .catch(error => generateErrorMessage(error))
};

var generateErrorMessage = (response) => {
  hideElement(bookingConfirmation);
  hideElement(pastBookingsSection);
  hideElement(upcomingBookingsSection);
  hideElement(checkInSection)
  hideElement(bookingsMessage);
  hideElement(bookingStatusContainer);
  showElement(reservationsButton);

  checkInDateInput.value = '';
  roomSelection.value = '';
  
  errorMessageSection.innerHTML = '';
  errorMessageSection.innerHTML +=
    `<h2 class="message-header" id="errorMessage">Error ${response.status}: ${response.status.text}: Oops! Looks like there was an error!</h2>
    <p class="message-body">Please return to the Reservations page.<p>`;
};

var checkResponseStatus = (response) => {
  if (!response.ok) {
    throw new Error(`Error Status ${response.status}: ${response.status.text}`)
  } else {
    return response.json()
  }
}


export { getData, getCurrentCustomer, checkResponseStatus, generateErrorMessage };
