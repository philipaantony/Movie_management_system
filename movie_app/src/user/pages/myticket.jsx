import React from "react";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../config/config";
import QRCode from "qrcode.react";
import generatePDF, { Resolution, Margin } from "react-to-pdf";
import UserNavBar from "../usernavbar/usernavbar";
import Footer from "../../footer/footer";

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

  const booking_date = new Date(bookingDate).toLocaleDateString();
  const options = {
    method: "open",
    resolution: Resolution.HIGH, // Use Resolution.HIGH for higher resolution
    page: {
      margin: Margin.SMALL,
      format: "letter",
      orientation: "landscape",
    },
    canvas: {
      mimeType: "image/jpeg",
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
  const getTargetElement = () => document.getElementById("content-id");

  return (
    <>
      <UserNavBar />
      <br />
      <div className="container" id="content-id">
        <div className="col-xl-4 col-md-6 col-sm-12 mx-auto">
          <div className="card">
            <div className="card-content">
              <div style={{ margin: '20px' }}>
                <div class="row justify-content-md-center">
                  <div class="col ">
                    <img
                      src={`${baseUrl}/movie_poster/${posterurl}`}
                      alt={`${title} Poster`}
                      className="img-fluid rounded"
                      style={{ width: "190px", height: "260px" }}
                    />
                  </div>
                  <div class="col-md-auto">
                    <QRCode
                      value={`Show Time: ${time} | Theater: ${theaterName} | Screen: ${screenName} | Seat Numbers: ${selectedSeats} | Payment ID: ${paymentID}`}
                    />
                  </div>
                </div>
              </div>

              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {theaterName} || {screenName} || <br></br>
                  Booking Date: {booking_date} <br></br>
                  Payment Status: {bookingStatus}
                </p>
              </div>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"></li>
              <li className="list-group-item">Seat Numbers :<h3>{selectedSeats}</h3></li>
              <li className="list-group-item">Payment-ID:{paymentID}</li>
            </ul>
          </div>
        </div>
        <br />
      </div>
      <div className="container text-center">
        <button className="btn btn-primary mt-3" onClick={() => generatePDF(getTargetElement, options)}>
          Download Ticket
        </button>
      </div>
      <br></br>
      <Footer />
    </>
  );
}

export default Myticket;
