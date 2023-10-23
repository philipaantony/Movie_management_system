import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useNavigate } from 'react-router-dom';
import GoBackButton from "../../public/gobackButton";


function AdminViewTheaterLogin() {

  const navigate = useNavigate();

  const handleNavigation = (email,status) => {
    const passingData = {
      email: email,
      status:status,
    };

    navigate('/viewtheaterapplication', { state: passingData });
  };


  const usersPerPage = 20;
  const [theaters, setTheaters] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [statusUpdated, setStatusUpdated] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/theaterlogin"
        );
        console.log(response.data);
        setTheaters(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
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

  

  return (
    <div id="main">
      <div className="container mt-5 card" style={{ padding: "20px" }}>
        <h2>New Request</h2>
        <GoBackButton/>
        <table className="table">
          <thead>
            <tr>
              <th>Theater Email</th>
              <th>Status</th>
              <th>Scrutiny Application </th>
            
            </tr>
          </thead>
          <tbody>
            {currenttheaters.map((tr) =>
            
             
              tr.status === "Pending" ? (

                
                <tr key={tr.id}>
                  <td>{tr.email}</td>
                  <td>
                    <span class="badge bg-warning">{tr.status}</span>
                  </td>
                  <td>
                    <td>
                     
                        <button type="button" className="btn btn-primary"  
                        onClick={() => handleNavigation(tr.email,tr.status)}>
                          View Application
                        </button>
                      
                    </td>
                  </td>
                  
                </tr>
              ) : null// Render nothing if the status is not 'Approved'
            )}
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

      <div className="container mt-5 card" style={{ padding: "20px" }}>
        <h2>Current Theaters </h2>
        <table className="table">
          <thead>
            <tr>
              <th>Theater Email</th>
              <th>Status</th>
              <th>View Theater</th>
              
            </tr>
          </thead>
          <tbody>
            {currenttheaters.map((tr) =>
              // Check the status and conditionally render the row
              tr.status === "Approved" ? (
                <tr key={tr.id}>
                  <td>{tr.email}</td>
                  <td>
                    {" "}
                    <span class="badge bg-success">{tr.status}</span>
                  </td>
                  <td>
                    
                  <button type="button" className="btn btn-primary"  
                  onClick={() => handleNavigation(tr.email,tr.status)}>
                          View Theater
                        </button>

                  </td>
                 
                </tr>
              ) : null // Render nothing if the status is not 'Approved'
            )}
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

      <div className="container mt-5 card" style={{ padding: "20px" }}>
        <h2>Rejected Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Theater Email</th>
              <th>Status</th>
              <th>View Application</th>
              {/* <th>Delete Request</th> */}
            </tr>
          </thead>
          <tbody>
            {currenttheaters.map((tr) =>
              // Check the status and conditionally render the row
              tr.status === "Rejected" ? (
                <tr key={tr.id}>
                  <td>{tr.email}</td>
                  <td>
                    {" "}
                    <span class="badge bg-danger">{tr.status}</span>
                  </td>
                  <td>
                    
                  <button type="button" className="btn btn-primary"  
                  onClick={() => handleNavigation(tr.email,tr.status)}>
                          View Application
                        </button>

                  </td>
                  {/* <td>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button> 
                  </td> */}
                </tr>
              ) : null// Render nothing if the status is not 'Approved'
            )}
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

export default AdminViewTheaterLogin;
