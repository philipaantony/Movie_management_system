import React from 'react'
import TheaterSidebar from '../../sidebar/theater_sidebar'
import ViewTheaterList from '../componets/view_theater_list'

function Viewtheaterlistpage() {
    return (
        <div>
            <TheaterSidebar classname={"sidebar-item active"} />
            <ViewTheaterList />
        </div>
    )
}

export default Viewtheaterlistpage