var getData = (url) => {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        return response.json();
      }
    })
    .catch(error => generateErrorMessage(error))
};

var generateErrorMessage = (response) => {
  console.log('Error: ', response)
  // errorMessageContent.innerHTML = '';

  // errorMessageContent.innerHTML +=
  //   `<h2 class="modal-title" id="error-message-modal">${response.statusText}: Oops! Looks like there was an error!</h2>`;
  // MicroModal.show("modal-3")
};

export { getData, generateErrorMessage };
