import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import GoBackButton from '../../public/gobackButton';

function AdminViewTheater(prop) {


  const [theaters, setTheaters] = useState([]);

  const [statusUpdated, setStatusUpdated] = useState(false);

  const temail = prop.temail;
  const [tstatus,setStatus] = useState(prop.tstatus);

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/theaters', { 
          params: {
            theater_email: temail 
          }
         });
         console.log(response);
        
         setTheaters(response.data);
         console.log(theaters);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [statusUpdated]);

  


  const handleApproveClick = async (email,tstatus) => {
    try {
      
      console.log(email)
      setStatusUpdated(false);
      const response = await axios.patch("http://localhost:5000/api/approvetheaters", 
      { status: tstatus,
        email:email,
    });

  
    setStatusUpdated(true);
    setStatus(response.data.status);
    toast.success(response.data.message)
    setStatusUpdated(false);
    
    } catch (error) {
      console.error('Error updating status:', error);
      alert("Error updating status");
    }
   
  };



  return (
    <div id="main">
      <div><Toaster/></div>
  <div className="container mt-5 card" style={{ padding: "20px" }}>
    <h2>Theater Request</h2>
<GoBackButton/>
    <div className="row">
      {theaters.map((tr) =>
         (
          <div key={tr.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {tr.theater_name}

                  <span className={`badge ${
                    tstatus === "Pending" ? "bg-danger" : "bg-success"
                  } ml-2`}>Status: {tstatus}
                  </span>


                </h5>
                <p className="card-text">Owner: {tr.theater_owner}</p>
                <p className="card-text">Location: {tr.theater_location}</p>
                <p className="card-text">Contact Email: {tr.theater_email}</p>
                <p className="card-text">Phone No: {tr.theater_phone}</p>
                <div className="d-flex justify-content-between align-items-center">
                  {  tstatus === "Pending" ? ( <button
                    type="button"
                    onClick={() => 
                      {
                        const newStatus ="Approved";
                        handleApproveClick(tr.theater_email,newStatus)}
                      }
                      
                    className="btn btn-primary mr-2"
                  >
                    Approve
                  </button>):(
                     <button
                     type="button"
                     onClick={() => 
                      {
                        const newStatus ="Pending";
                        handleApproveClick(tr.theater_email,newStatus)}
                      }
                     className="btn btn-danger mr-2"
                   >
                     Cancel 
                   </button>
                  )}
                 
                  <button type="button" className="btn btn-danger" 
                   onClick={() => 
                    {
                      const newStatus ="Rejected";
                      handleApproveClick(tr.theater_email,newStatus)}
                    }
                     >
                  Reject Application
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) 
      )}
    </div>
  </div>
</div>


  );
}

export default AdminViewTheater;
