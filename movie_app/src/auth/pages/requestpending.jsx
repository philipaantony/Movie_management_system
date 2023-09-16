import React from 'react';
import { Link } from 'react-router-dom';

const RequestPending = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-danger ">
              <i className="bi bi-exclamation-octagon-fill" >
                </i> Your Request is Under Review</h4>
              <p className="card-text">
    
                Thank you for submitting your request for the creation of a theater account.<br></br>
                Our team is currently reviewing your request. 
                
              </p>
              <span style={{ fontWeight: 'bold', color: 'green' }}>
                  Please wait for approval or contact us for more information.
                </span>
              <p>Email: example@example.com</p>
              <p>Phone: 123-456-7890</p>
              <hr />
              <h5>Provide Feedback</h5>
              <form>
                <div className="mb-3">
                  <label htmlFor="feedbackText" className="form-label">
                    Your Feedback
                  </label>
                  <textarea
                    className="form-control"
                    id="feedbackText"
                    rows="4"
                    placeholder="Share your feedback here..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit Feedback
                </button>
              </form>
            </div>
            <div className="card-footer">
              <Link to="/" className="btn btn-secondary">
                Go Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPending;
