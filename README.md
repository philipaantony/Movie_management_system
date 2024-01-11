# Online Movie Management System

The Online Movie Management System is a MERN stack-based project that aims to redefine the movie-going 
experience by providing a comprehensive solution for users, theaters, and administrators. 
This README file provides an overview of the project, its features, and instructions for setup and usage.

## Table of Contents
1. [Introduction](#introduction)
2. [Modules](#modules)
   - [Admin](#admin)
   - [Theater](#theater)
   - [User](#user)
3. [Additional Features](#additional-features)
4. [Technologies Used](#technologies-used)
5. [Installation](#installation)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Introduction

The traditional approach to movie booking has evolved, and the Online Movie Management System 
leverages the MERN stack to revolutionize the movie-going experience. This project consists of 
three interconnected modules: Admin, Theater, and User. Each module is designed to provide a 
seamless and user-centric experience.

## Modules

### Admin

The Admin module empowers administrators to manage user registrations, approve new theaters, and block users. Key features include:
- View registered users and theaters.
- Approve or reject new theaters.
- Block and unblock users.

### Theater

The Theater module allows theaters to efficiently manage their operations. Key features include:
- Add screens and design seat orientations for booking.
- Allocate movies for streaming.
- Manage screens, show times, and view booking statistics.

### User

The User module provides a user-friendly interface for movie enthusiasts. Key features include:
- View detailed movie information.
- Explore theaters and their screen configurations.
- Make bookings, generate tickets with QR codes, and download tickets.
- Save favorite movies for future reference.

## Additional Features

- **Google Authentication:** Users can register manually or through Google authentication.
- **Forgot Password:** Users can recover their passwords via email with an OTP.
- **Email Notifications:** Users and theaters receive email notifications when blocked from the site.
- **Payment Integration:** Razorpay is integrated for seamless and secure payments.
- **QR Code Tickets:** Tickets are generated with QR codes containing all booking details.
- **Preview Tickets:** Users can view all previous tickets.
- **Theater Analytics:** Theater users can view booking details via pie charts (date-wise booking) and booked seats on a specific screen.

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- Razorpay
- Google Authentication
- Nodemailer

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up MongoDB and update the configuration files accordingly.
4. Configure Google and Razorpay authentication.
5. Run the application using `npm start`.

## Usage

1. Access the application through the provided URL.
2. Register or log in based on your role (Admin, Theater, User).
3. Explore the features of the respective modules.

## Contributing

Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
