import React from 'react'
import AdminSidebar from '../../sidebar/admin_sidebar'
import Adminviewaddedmovies from '../componets/admin_view_added_movies'

function Adminviewaddedmoviespage() {
  return (
    <div>
        <AdminSidebar classname={"sidebar-item active"} />
        <Adminviewaddedmovies/>

    </div>
  )
}

export default Adminviewaddedmoviespage