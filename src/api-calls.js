var getData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .catch(error => console.log('Looks like there was a problem!', error))
}

// var checkStatus = (response) => {
//   if (response.ok) {
//     return Promise.resolve(response);
//   } else {
//     return Promise.reject(new Error(generateErrorMessage(response)));
//   }
// }

// var generateErrorMessage = (response) => {
//   errorMessageContent.innerHTML = '';

//   errorMessageContent.innerHTML +=
//     `<h2 class="modal-title" id="error-message-modal">${response.statusText}: Oops! Looks like there was an error!</h2>`;
//   MicroModal.show("modal-3")
// }

export default getData;
// export default { getData, checkStatus };
