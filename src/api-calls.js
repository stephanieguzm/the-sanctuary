var getData = (url) => {
  return fetch(url)
    .then(checkStatus)
    .then(response => response.json())
    .catch(error => generateErrorMessage(error))
}

var checkStatus = (response) => {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(generateErrorMessage(response)));
  }
}

var generateErrorMessage = (response) => {
  console.log('Error: ', response)
  // errorMessageContent.innerHTML = '';

  // errorMessageContent.innerHTML +=
  //   `<h2 class="modal-title" id="error-message-modal">${response.statusText}: Oops! Looks like there was an error!</h2>`;
  // MicroModal.show("modal-3")
}

export { getData, checkStatus, generateErrorMessage };
