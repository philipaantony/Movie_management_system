import React from 'react'
import AdminSidebar from '../../sidebar/admin_sidebar'
import AdminViewPostedMovies from '../componets/admin_view_posted_movies'

function AdminViewPostedMoviesPage() {
  return (
    <div>
        <AdminSidebar viewmovie={"sidebar-item active"}/>
        <AdminViewPostedMovies/>
    </div>
  )
}

export default AdminViewPostedMoviesPage