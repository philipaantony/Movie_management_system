import React from 'react'
import AdminViewUsers from '../componets/admin_view_users'
import AdminSidebar from '../../sidebar/admin_sidebar'

function AdminViewVsersPage() {
  return (
    <div>
        <AdminSidebar classname={"sidebar-item active"} />
        <AdminViewUsers/>
    </div>
  )
}

export default AdminViewVsersPage