import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

function AdminViewTheater() {
  const usersPerPage = 5;
  const [theaters, setTheaters] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [statusUpdated, setStatusUpdated] = useState(false);

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/theaters');
        setTheaters(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [statusUpdated]);

  
  

  const offset = currentPage * usersPerPage;
  const currenttheaters = theaters.slice(offset, offset + usersPerPage);

  const pageCount = Math.ceil(theaters.length / usersPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleApproveClick = async (theaterId,email) => {
    try {
      console.log(theaterId);
      console.log(email)
      setStatusUpdated(false);
      const response = await axios.patch(`http://localhost:5000/api/approvetheaters/${theaterId}`, 
      { status: 'Approved',
         email:email,
    });

    console.log(response.data.message);
    setStatusUpdated(true);
    alert(response.data.message);
    setStatusUpdated(true);
    } catch (error) {
      console.error('Error updating status:', error);
      alert("Error updating status");
    }
   
  };

  return (
    <div id="main">
      <div className="container mt-5 card" style={{padding:"20px"}}>
        <h2>Theater Request</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Theater Name</th>
              <th>Owner</th>
              <th>Location</th>
              <th>Contact Email</th>
              <th>Phone No</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Delete Request</th>
            </tr>
          </thead>
          <tbody>
          {currenttheaters.map((tr) => (
  // Check the status and conditionally render the row
  tr.status === 'Pending' ? (
    <tr key={tr.id}>
      <td>{tr.theater_name}</td>
      <td>{tr.theater_owner}</td>
      <td>{tr.theater_location}</td>
      <td>{tr.theater_email}</td>
      <td>{tr.theater_phone}</td>
      <td><span class="badge bg-danger">{tr.status}</span></td>
      <td><button
        type="button"
        onClick={() => handleApproveClick(tr._id, tr.theater_email)}
        className="btn btn-primary"
      >
        Approve
      </button></td>
      <td><button type="button" className="btn btn-danger">Delete</button></td>
    </tr>
  ) : null// Render nothing if the status is not 'Approved'
))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>



      <div className="container mt-5 card" style={{padding:"20px"}}>
        <h2>Theater Request</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Theater Name</th>
              <th>Owner</th>
              <th>Location</th>
              <th>Contact Email</th>
              <th>Phone No</th>
              <th>Status</th>
              <th>Terminate</th>
              <th>Delete Request</th>
            </tr>
          </thead>
          <tbody>
          {currenttheaters.map((tr) => (
  // Check the status and conditionally render the row
  tr.status === 'Approved' ? (
    <tr key={tr.id}>
      <td>{tr.theater_name}</td>
      <td>{tr.theater_owner}</td>
      <td>{tr.theater_location}</td>
      <td>{tr.theater_email}</td>
      <td>{tr.theater_phone}</td>
      <td>  <span class="badge bg-success">{tr.status}</span></td>
      <td><button
        type="button"
       
        className="btn btn-warning"
      >
        Terminate
      </button></td>
      <td><button type="button" className="btn btn-danger">Delete</button></td>
    </tr>
  ) : null // Render nothing if the status is not 'Approved'
))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </div>
    </div>
  );
}

export default AdminViewTheater;
