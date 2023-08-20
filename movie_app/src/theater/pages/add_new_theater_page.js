import React from 'react'
import AddNewTheater from '../componets/add_new_theater'
import TheaterSidebar from '../../sidebar/theater_sidebar'

function AddNewTheaterPage() {
    return (
        <div>
            <TheaterSidebar newt={"sidebar-item active"} />
            <AddNewTheater />
        </div>
    )
}

export default AddNewTheaterPage