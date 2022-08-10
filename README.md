# The Sanctuary

## Project Overview
[Project Spec - Part I](https://frontend.turing.edu/projects/overlook.html)

The Sanctuary is a hotel management tool for customers to manage room bookings. Customers login to their hotel dashboard and see their past and upcoming bookings. 

A customer can search for available rooms by date and room type and reserve a room with the click or press of a button. 

If a room isn't available, the customer is notified and encouraged to alter their search. They can then return to their dashboard where they can see their new and previous bookings.

## Contributors

[Stephanie Guzman](https://github.com/stephanieguzm)

Code Review by [Abby Luce](https://github.com/abbyluce)

## Technologies Used

- JavaScript
- Webpack
- Mocha
- Chai
- Node.js
- CSS
- HTML

## Accessibility
The project is fully tabbable and optimized for screen readers.

## Login and Dashboard View
![](https://github.com/stephanieguzm/the-sanctuary/blob/main/login.gif)

## Booking View
![](https://github.com/stephanieguzm/the-sanctuary/blob/main/reserve-room.gif)

## Installation and Setup: 

This project utilizes the Overlook API which can be accessed [here] (https://github.com/turingschool-examples/overlook-api)

### Backend Setup

1. From your terminal, `cd` into your parent directory 
2. Clone down the Overlook API:
  ```
  git@github.com:turingschool-examples/overlook-api.git
  ```
3. `cd` into the API directory and run:
  ```
  npm install
  npm start
  ```

### Frontend Setup

1. From your terminal, `cd` back to your parent directory
2. Clone down this repository:
  ```
  git@github.com:stephanieguzm/the-sanctuary.git
  ```
3. `cd` into `the-sanctuary` directory and run:
  ```
  npm install
  npm start
  ```
4. Enter the following url in your browser: http://localhost:8080/

### Explore the Project

- Login with the username `customer34` and password `overlook2021`
   _50 customers are available. Visit a new customer dashboard by logging in with username `customer` followed by a number 1-50. The password is the same._
- Explore the project.
-  Refresh the page to login as a new customer.
- Enter `control` + `c` in your terminal to stop the server at any time.

## Future Iterations

- Add photos to booking listings
- Personalize user dashboard
- Log out option
- Add Wellness Center features

