import React from 'react'
import TheaterSidebar from '../../sidebar/theater_sidebar'
import TheaterHome from '../componets/Theater_Home'



function Theater_Home_Page() {
    return (
        <div>

            <TheaterSidebar classname={"sidebar-item active"} />
            <TheaterHome />

        </div>
    )
}

export default Theater_Home_Page