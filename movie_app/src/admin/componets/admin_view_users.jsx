import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { baseUrl } from "../../config/config";
import { toast, Toaster } from 'react-hot-toast';
import GoBackButton from '../../public/gobackButton';

function AdminViewUsers() {

  const [blockReason, setBlockReason] = useState('');

  const usersPerPage = 15;
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/getalluser`);
        setUsers(response.data);
        console.log(response.data)
        setRefresh(false)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [refresh]);

  const blockUser = async (userId,email,status,reason) => {
    console.log(reason);
    
    try {
      const response = await axios.post(`${baseUrl}/api/block-user/${userId}`,{email,status,reason});
      setRefresh(true);
      toast.success(response.data.message)
    } catch (error) {
      console.error('Error blocking user:', error);
  
      // Show an error toast when there's an error
      toast.error('Error blocking user', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  

  const offset = currentPage * usersPerPage;
  const currentUsers = users.slice(offset, offset + usersPerPage);

  const pageCount = Math.ceil(users.length / usersPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div id="main">
         <div><Toaster/></div>
      <div className="container mt-5 card" style={{padding:"20px"}}>
        <h2>User List</h2>
        <GoBackButton/>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Dob</th>
              <th>Action</th>
             
              
             
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone === 'googleauth' ? <img  style={{ width: '70px', height: '42px' }} src="assets/googleauth/verifiedlogo.png" alt="Google Auth Image" /> : user.phone}</td>
                <td>{user.dob === 'googleauth' ?  <img  style={{ width: '70px', height: '42px' }} src="assets/googleauth/verifiedlogo.png" alt="Google Auth Image" /> : user.dob}</td>
       
                <td>
      {user.status === 'blocked' ? (
        <button type="button" className="btn btn-success"  onClick={() => blockUser(user._id,user.email,'Authorised')}>
          Unblock
        </button>
      ) : (
        // <button type="button" className="btn btn-danger" onClick={() => blockUser(user._id,user.email,'blocked')}>
        //   Block
        // </button>
<>
        <button type="button" className="btn btn-outline-primary block" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
        Block
      </button>




      <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                Block User 
                </h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                  <i data-feather="x" />
                </button>
              </div>
              <div className="modal-body">
              <textarea
                  id="blockReason"
                  className="form-control" 
                  placeholder="Enter the reason for blocking..."
                  value={blockReason}
                  onChange={(e) => setBlockReason(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-light-secondary" data-bs-dismiss="modal">
                  <i className="bx bx-x d-block d-sm-none" />
                  <span className="d-none d-sm-block">Close</span>
                </button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal" 
                onClick={() => blockUser(user._id,user.email,'blocked',blockReason)}>
                  <i className="bx bx-check d-block d-sm-none" />
                  <span className="d-none d-sm-block">Block</span>
                </button>
              </div>
            </div>
          </div>
        </div>




        
      </>

      )}
    </td>
              </tr>
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



      
        
        {/* Vertically Centered modal Modal */}
        
      </div>
   
  );
}

export default AdminViewUsers;
