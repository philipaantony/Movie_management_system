import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../config/config";
import { useSelector } from "react-redux";

import axios from "axios";
import UserNavBar from "../usernavbar/usernavbar";

function UserSelectSeat() {
  const movieData = useSelector((state) => state.movie);
  const location = useLocation();
  const movie_id = location.state.movie_id;
  const time_id = location.state.time_id;
  const screen_id = location.state.screen_id;
  const userId = localStorage.getItem("userId");
  const date = location.state.date;
  const navigate = useNavigate();
  const trid = location.state.theater_id;

  const [theatre, settheatre] = useState([]);
  const [rows, setrows] = useState(6);
  const [columns, setcolumns] = useState(6);
  const [myorientation, setmyorientation] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedseats, setbookedseats] = useState("");
  const seatPrice = 150; // Price per seat

  // Calculate the total price based on the number of selected seats
  const totalPrice = selectedSeats.length * seatPrice;

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/getmytheatre-user/${time_id}`)
      .then((response) => {
        console.log(response.data);
        setrows(response.data.rows);
        setcolumns(response.data.columns);
        setmyorientation(response.data.orientation);
        settheatre(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const mydata = {
      theater_id: trid,
      screen_id: screen_id,
      show_time_id: time_id,
      date: date,
      movie_id:movie_id
    };
    axios
      .get(`${baseUrl}/api/fetchbookedseats`, {
        params: mydata,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setbookedseats(response.data.BookedSeats);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedSeats]);

  const bookmyshow = (orderId,paymentId,amount) => {
    
    console.log("-----------------");
    console.log("user_id :", userId);
    console.log("movie_id:", movie_id);
    console.log("theatre id:", trid);
    console.log("screen_id :", screen_id);
    console.log("show_time_id:", time_id);
    console.log("selectedSeats:", selectedSeats);
    console.log("Date:", date);
    console.log("Order id :",orderId);
    console.log("payment id :",paymentId);

    console.log("amount :",amount);

    const data = {
      user_id: userId,
      movie_id: movie_id,
      theater_id: trid,
      screen_id: screen_id,
      show_time_id: time_id,
      selectedSeats: selectedSeats,
      date: date,
      orderId:orderId,
      paymentId:paymentId,
      amount:totalPrice
    };
    axios
      .post(`${baseUrl}/api/moviebookings`, data)
      .then((response) => {
        console.log("Booking successful:", response.data);

        console.log("useState:", response.data.BookedSeats);
        if (response.data.status === true) {
          alert("Booking successful! Your seats have been reserved.");
          setSelectedSeats([]);
        }
        else{
          alert("Booking failed. Contact Admin.");
        }
        console.log(bookedseats);
      })
      .catch((error) => {
        console.error("Booking failed:", error);
      });
  };




  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
  }
  
  async function displayRazorpay(totalPrice) {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );
  
    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }
  
    // creating a new order
    const result = await axios.post("http://localhost:5000/payment/orders",{totalPrice});
  
    if (!result) {
        alert("Server error. Are you online?");
        return;
    }
  
    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;
  
    const options = {
        key: "rzp_test_vwFYRANZsk49Qu", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "Movie Verse.",
        description: "Test Transaction",
        image: {  },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };
  
            const result = await axios.post("http://localhost:5000/payment/success", data);
            if (result.data.msg === 'success') {
              alert("Payment done successfully!. Your booking is processing");
          }          
            const orderId = result.data.orderId;
            const paymentId = result.data.paymentId;
            if(result.data.msg === 'success')
            {
              bookmyshow(orderId,paymentId,amount.toString());
            }
        },
        prefill: {
            name: "Movie Verse",
            email: "movieverse@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Movie verse Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

















  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  const unavailable = myorientation.split(",");
  const mybooking = bookedseats.split(",");

  const isBooked = (seatNumber) => mybooking.includes(seatNumber);

  const handleClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats((prevSeats) =>
        prevSeats.filter((seat) => seat !== seatNumber)
      );
    } else {
      setSelectedSeats((prevSeats) => [...prevSeats, seatNumber]);
    }
  };

  return (
    <div>
      <UserNavBar/>
        <br></br>
      <div class="card" style={{ marginLeft: "200px", marginRight: "200px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={movieData.poster_url}
              alt={movieData.title}
              style={{
                maxWidth: "200px",
                margin: "30px",
                borderRadius: "10px",
                position: "",
                top: "0",
                left: "0",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.14)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title">{movieData.title}</h2>
              <div className="row">
                <div className="col">
                  <p className="card-text">
                    <strong>Genre:</strong> {movieData.genre}
                  </p>
                  <p className="card-text">
                    <strong>Duration:</strong> {movieData.duration} Mins
                  </p>
                 
                </div>
                <div className="col">
                  <p className="card-text">
                    <strong>Release Date:</strong> {movieData.release_date}
                  </p>
                  <p className="card-text">
                    <strong>Director:</strong> {movieData.director}
                  </p>
                </div>
              </div>
              <p className="card-text">
                <strong>Language:</strong> {movieData.language}
              </p>
              <p className="card-text">
                <strong>Description:</strong> {movieData.description}
              </p>
              <p className="card-text">
                <strong>Production:</strong> {movieData.production}
              </p>
              <p className="card-text">
                <strong>Cast:</strong> {movieData.cast}
              </p>
            </div>
          </div>
        </div>
      </div>

      {myorientation ? (
        <>
          <div>
            <center>
              <br></br>
              <h2>Select Your Seats</h2>
            </center>
            <div class="seat-grid" style={{ margin: "30px", padding: "50px" }}>
              {(() => {
                const seatRow = [];
                for (let i = 0; i < rows; i++) {
                  const seatCols = [];
                  for (let j = 1; j <= columns; j++) {
                    const seatNumber = alphabet[i] + "-" + j;
                    const seactno = alphabet[i] + "-" + j;
                    const isSelected = selectedSeats.includes(seatNumber);
                    const isUnavailable = unavailable.includes(seactno);
                    const isBookedSeat = isBooked(seatNumber); // Check if seat is booked
                    const backgroundColor = isSelected
                      ? "#25CA00" //green
                      : isBookedSeat
                      ? "#e33545  "
                      : "";

                    seatCols.push(
                      <div className="seat" key={seatNumber}>
                        {isUnavailable ? (
                          <div class="seat unavailable"></div>
                        ) : (
                          <div>
                            {isBookedSeat ? (
                              <button
                                className="btn btn-outline-dark btn-sm"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: backgroundColor,
                                  height: "38px",
                                  width: "38px",
                                  cursor: "not-allowed",
                                }}
                              >
                                {alphabet[i] + "" + j}
                              </button>
                            ) : (
                              <button
                                className="btn btn-outline-dark btn-sm"
                                style={{
                                  fontSize: "12px",
                                  backgroundColor: backgroundColor,
                                  height: "38px",
                                  width: "38px",
                                }}
                                onClick={() => handleClick(seatNumber)}
                              >
                                {alphabet[i] + "" + j}
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }
                  seatRow.push(
                    <div className="myrow" key={i}>
                      {seatCols}
                    </div>
                  );
                }
                return seatRow;
              })()}
            </div>
          </div>
          <div
            class="card"
            style={{ marginLeft: "200px", marginRight: "200px" }}
          >
            <div className="card-body">
              <div className="card mb-3"></div>

              <h5 className="card-title">Selected Seats:</h5>
              <div className="billing-container">
                <div className="selected-seats">
                  {selectedSeats.map((seat, index) => (
                    <span
                      className="badge rounded-pill bg-success"
                      style={{ marginLeft: "5px" }}
                      key={index}
                    >
                      {seat}{" "}
                    </span>
                  ))}
                </div>
                <div className="billing-info">
                  <p>Total Price: ₹{totalPrice}</p>
                  {/* <button className="btn btn-danger" onClick={bookmyshow}>
                    Book Now
                  </button> */}

                 
              
                <p>Buy Now!</p>
                <button className="btn btn-danger" onClick={() => displayRazorpay(totalPrice)}>
                    Pay ₹{totalPrice}
                </button>
         


                  <button
                    style={{ marginLeft: "20px" }}
                    className="btn btn-primary"
                    onClick={() => {
                      setSelectedSeats([]);
                    }}
                  >
                    Clear Selection
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}



export default UserSelectSeat;
