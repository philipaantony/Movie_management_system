import React from 'react'

import AdminSidebar from '../../sidebar/admin_sidebar'
import AdminViewTheaterLogin from '../componets/admin_view_theater_login'


function AdminViewTheatersPage() {
  return (
    <div>A
          <AdminSidebar classname={"sidebar-item active"} />
          <AdminViewTheaterLogin/>
    </div>
  )
}

export default AdminViewTheatersPage