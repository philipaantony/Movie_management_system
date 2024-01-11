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
6. [User_Interface_Previews](#User-Interface-Previews)


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

## User Interface Previews

### Admin Module

- Admin Home Page
  ![Admin Home Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/admin_home.png)

- Admin Theatre List
  ![Admin Theatre List](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/admin_theatre_list.png)

- Admin User List
  ![Admin User List](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/admin_userlist.png)

- Login Page
  ![Login Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/login.png)

### Theatre Module

- Theatre Home Page
  ![Theatre Home Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/theatre_home.png)

- Theatre Allocate Movie to Screen
  ![Allocate Movie to Screen](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/theatre_allocate_movie_to_screen.png)

- Theatre Screen Creation 1
  ![Screen Creation 1](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/theatre_screen_creation1.png)

- Theatre Screen Creation 2
  ![Screen Creation 2](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/theatre_screen_creation2.png)

- Theatre View Booking
  ![View Booking](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/theatre_view_booking.png)

- Theatre View Movies
  ![View Movies](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/theatre_view_movies.png)

- Theatre View Screen
  ![View Screen](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/theatre_view_screen.png)

### User Module

- User Home Page
  ![User Home Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/user_home.png)

- User Payment Page
  ![User Payment Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/user_payment.png)

- User Profile Page
  ![User Profile Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/user_profile.png)

- User Registration Page
  ![User Registration Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/user_registration.png)

- User Select Movies Page
  ![Select Movies Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/user_select_movies.png)

- User Ticket Page
  ![User Ticket Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/user_ticket.png)

- User View Bookings Page
  ![View Bookings Page](https://github.com/philipaantony/Movie_management_system/blob/master/ScreenShots/user_view_bookings.png)



Contributions are welcome! Please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).
