import React from 'react'
import AdminSidebar from '../../sidebar/admin_sidebar'
import AdminViewTheater from '../componets/admin_view_theater'
import { useLocation } from 'react-router-dom';

function AdminApproveTheaterPage() {
  const location = useLocation();
  const email = location.state.email;
  const status = location.state.status;


  console.log(email);
  return (
    
    <div>
         <AdminSidebar classname={"sidebar-item active"} />
         <AdminViewTheater temail={email} tstatus={status}/>
    </div>
  )
}

export default AdminApproveTheaterPage