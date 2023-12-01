import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../../config/config';
import { useNavigate } from 'react-router-dom';
import UserNavBar from '../usernavbar/usernavbar';


function UserViewMyTickets() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [ticketDetails, setTicketDetails] = useState([]);

  const handleNavigation = (selectedSeats) => {
    const passingData = {
      posterurl: selectedSeats[0].poster_url,
      title: selectedSeats[0].title,
      theaterName: selectedSeats[0].theater_name,
      screenName: selectedSeats[0].screen_name,
      time: selectedSeats[0].time,
      bookingDate: selectedSeats[0].bookingdate,
      bookingStatus: selectedSeats[0].bookingstatus,
      razorpayOrderID: selectedSeats[0].razorpayOrderID,
      paymentID: selectedSeats[0].paymentId,
      selectedSeats: selectedSeats.map(t => t.selectedSeats).join(', '),

    };

    navigate('/myticket', { state: passingData });
  };

  useEffect(() => {
    // Fetch ticket details by userId
    axios.get(`${baseUrl}/api/getTicketDetails/${userId}`)
      .then((response) => {
        console.log(response.data);
        setTicketDetails(response.data);
      })
      .catch((error) => {
        console.error('Error fetching ticket details:', error);
      });
  }, [userId]);

  return (
    <div>
      <UserNavBar />
      <div className="container mt-5">
        <h2>Ticket Details</h2>
        {ticketDetails.length > 0 ? (
          <div className="card mt-3">
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Movie</th>
                    <th>Show Details</th>
                    <th>Booking Details</th>
                    <th>Payment ID</th>
                    <th>View My Ticket</th>
                    <th>Seat No</th>

                  </tr>
                </thead>
                <tbody>
                  {ticketDetails.map((ticket, index) => {
                    const isNewPaymentId = index === 0 || ticketDetails[index - 1].paymentId !== ticket.paymentId;
                    const selectedSeats = ticketDetails.filter(t => t.paymentId === ticket.paymentId);

                    return (
                      <tr key={index}>
                        {isNewPaymentId && (
                          <>
                            <td rowSpan={selectedSeats.length}>
                              <div className="movie-card">
                                <h4>{ticket.title}</h4>
                                <img
                                  src={`${baseUrl}/movie_poster/${ticket.poster_url}`}
                                  alt={`${ticket.title} Poster`}
                                  style={{ width: '100px', height: '150px', borderRadius: '10px' }}
                                />
                              </div>
                            </td>
                            <td rowSpan={selectedSeats.length}>
                              <strong>Theater: {ticket.theater_name}</strong><br />
                              <strong>Screen Name: {ticket.screen_name}</strong><br />
                              <strong>Show Time: {ticket.time}</strong><br />
                              <strong>Booking Date:</strong> {new Date(ticket.bookingdate).toLocaleDateString()}<br />
                            </td>
                            <td rowSpan={selectedSeats.length}>
                              <strong>Booking Status:</strong> {ticket.bookingstatus}<br />
                              <strong>Razorpay Order ID:</strong> {ticket.razorpayOrderID}
                            </td>
                            <td rowSpan={selectedSeats.length}>
                              {ticket.paymentId}
                            </td>

                            <td rowSpan={selectedSeats.length}>
                              <button className='btn btn-success' onClick={() => handleNavigation(selectedSeats)}>My Ticket</button>
                            </td>
                          </>
                        )}
                        <td>
                          <div className='cols'>
                            {ticket.selectedSeats}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <p>No ticket details found.</p>
        )}
      </div>
    </div>
  );
}

export default UserViewMyTickets;
