import React from 'react'
import AdminSidebar from '../../sidebar/admin_sidebar'
import AdminAddMovie from '../componets/admin_add_movie'

function AdminAddMoviePage() {
  return (
    <div>
        <AdminSidebar newt={"sidebar-item active"}/>
        <AdminAddMovie/>
    </div>
  )
}

export default AdminAddMoviePage