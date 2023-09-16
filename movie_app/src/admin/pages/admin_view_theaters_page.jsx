import React from 'react'
import AdminViewTheater from '../componets/admin_view_theater'
import AdminSidebar from '../../sidebar/admin_sidebar'

function AdminViewTheatersPage() {
  return (
    <div>A
          <AdminSidebar classname={"sidebar-item active"} />
          <AdminViewTheater/>
    </div>
  )
}

export default AdminViewTheatersPage