import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { baseUrl } from "../../config/config";
import GoBackButton from '../../public/gobackButton';

function AdminViewUsers() {
  const usersPerPage = 10;
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
   
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getalluser');
        setUsers(response.data);
        setRefresh(false)
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [refresh]);

  const handledelete = async (id) => {
    console.log(id);
      axios.delete(`${baseUrl}/api/delete/${id}`)
      .then((response) => {
        setRefresh(true);
        console.log(response.data); 
        
        alert(response.data.message)   
      })
      .catch((error) => {
        console.error('Error:', error.response ? error.response.data : error.message);
       
      })
   
  };

  
  

  const offset = currentPage * usersPerPage;
  const currentUsers = users.slice(offset, offset + usersPerPage);

  const pageCount = Math.ceil(users.length / usersPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div id="main">
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
              <th>View</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone === 'googleauth' ? <img  style={{ width: '70px', height: '42px' }} src="assets/googleauth/verifiedlogo.png" alt="Google Auth Image" /> : user.phone}</td>
                <td>{user.dob === 'googleauth' ?  <img  style={{ width: '70px', height: '42px' }} src="assets/googleauth/verifiedlogo.png" alt="Google Auth Image" /> : user.dob}</td>
                <td><button type="button" class="btn btn-primary">View</button></td>
                <td>
                  <button type="button" 
                          class="btn btn-danger" 
                          onClick={() =>   {handledelete(user._id)}} >
                            Delete</button>
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
    </div>
  );
}

export default AdminViewUsers;
