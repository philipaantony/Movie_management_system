import React from 'react';
import { useLocation } from 'react-router-dom';
import { baseUrl } from '../../config/config';
import QRCode from 'qrcode.react';
import generatePDF, { Resolution, Margin } from 'react-to-pdf';
import UserNavBar from '../usernavbar/usernavbar';
import Footer from '../../footer/footer';

function Myticket() {
  const location = useLocation();
  const {
    posterurl,
    title,
    theaterName,
    screenName,
    time,
    bookingDate,
    bookingStatus,
    razorpayOrderID,
    paymentID,
    selectedSeats,
  } = location.state;

  const options = {
    method: 'open',
    resolution: Resolution.MEDIUM,
    page: {
      margin: Margin.SMALL,
      format: 'letter',
      orientation: 'landscape',
    },
    canvas: {
      mimeType: 'image/jpeg',
      qualityRatio: 0.8,
    },
    overrides: {
      pdf: {
        compress: true,
      },
      canvas: {
        useCORS: true,
      },
    },
  };
  const getTargetElement = () => document.getElementById('content-id');

  return (
    <>
      <UserNavBar />
      <div className="container mt-5" id="content-id">
        <div className="row">
          <div className="col-sm-9">
            <div className="card" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <div className="card-body">
                <div className="row mb-4">
                  <div className="col-sm">
                    <img
                      src={`${baseUrl}/movie_poster/${posterurl}`}
                      alt={`${title} Poster`}
                      className="img-fluid rounded"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                  <div className="col-sm">
                    <h4>{title}</h4>
                    <p>
                      <strong>Theater:</strong> {theaterName}
                    </p>
                    <p>
                      <strong>Screen Name:</strong> {screenName}
                    </p>
                    <p>
                      <strong>Show Time:</strong> {time}
                    </p>
                    <p>
                      <strong>Booking Date:</strong> {new Date(bookingDate).toLocaleDateString()}
                    </p>
                    <p>
                      <strong>Booking Status:</strong> {bookingStatus}
                    </p>
                    <p>
                      <strong>Razorpay Order ID:</strong> {razorpayOrderID}
                    </p>
                    <p>
                      <strong>Payment ID:</strong> {paymentID}
                    </p>
                    <p className="font-weight-bold">Selected Seats</p>
                    <p>{selectedSeats}</p>
                  </div>
                  <div className="col-sm">
                    <QRCode
                      value={`Show Time: ${time} | Theater: ${theaterName} | Screen: ${screenName} | Seat Numbers: ${selectedSeats} | Payment ID: ${paymentID}`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button className="btn btn-primary mt-3" onClick={() => generatePDF(getTargetElement, options)}>
              Download Ticket
            </button>
          </div>
        </div>
        <br />
      </div>
      <Footer />
    </>
  );
}

export default Myticket;
