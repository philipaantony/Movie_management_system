import React from 'react';
import './userprofile.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function UserProfile() {
  const user = {
    username: 'john_doe',
    name: 'John Doe',
    avatarUrl: 'assets/images/faces/1.jpg',
    email: 'john@example.com',
    dob: 'January 1, 1990',
    bio: 'Software Developer',
    followers: 100,
    following: 50,
  };

  const handleWishlistClick = () => {
    // Implement your wishlist functionality here
  };

  const handleBookingHistoryClick = () => {
    // Implement your booking history functionality here
  };

  const handleResendActivationClick = () => {
    // Implement your resend activation functionality here
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="user-avatar text-center">
                <img
                  src={user.avatarUrl}
                  alt={user.username}
                  className="img-fluid rounded-circle"
                />
              </div>
              <div className="user-info mt-3">
                <h2>{user.name}</h2>
                <p>@{user.username}</p>
                <p className="font-weight-bold">Email: {user.email}</p>
                <p className="font-weight-bold">Date of Birth: {user.dob}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <p className="bio">{user.bio}</p>
              <ul className="list-group">
                <li className="list-group-item">
                  
                  Wishlist
                </li>
                <li className="list-group-item">
                  
                  Booking History
                </li>
                <li className="list-group-item">
                 
                  Resend Activation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-success me-1 mb-1 d-inline-block">
      {/* Button trigger for Success theme modal */}
      <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#success">
        Success
      </button>
      {/* Success theme Modal */}
      <div className="modal fade text-left" id="success" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel110" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header bg-success">
              <h5 className="modal-title white" id="myModalLabel110">
                Success Modal
              </h5>
              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <i data-feather="x" />
              </button>
            </div>
            <div className="modal-body">
              Tart lemon drops macaroon oat cake chocolate toffee
              chocolate
              bar icing. Pudding jelly beans
              carrot cake pastry gummies cheesecake lollipop. I
              love cookie
              lollipop cake I love sweet
              gummi
              bears cupcake dessert.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-light-secondary" data-bs-dismiss="modal">
                <i className="bx bx-x d-block d-sm-none" />
                <span className="d-none d-sm-block">Close</span>
              </button>
              <button type="button" className="btn btn-success ml-1" data-bs-dismiss="modal">
                <i className="bx bx-check d-block d-sm-none" />
                <span className="d-none d-sm-block">Accept</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

export default UserProfile;
