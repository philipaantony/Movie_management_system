import React from 'react'
import AdminSidebar from '../../sidebar/admin_sidebar'
import AdminHome from '../componets/admin_home'

function AdminHomePage() {
  return (
    <div>
        <AdminSidebar classname={"sidebar-item active"} />
        <AdminHome/>
    </div>
  )
}

export default AdminHomePage