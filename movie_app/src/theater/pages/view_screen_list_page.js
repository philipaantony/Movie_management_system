import React from 'react'
import TheaterSidebar from '../SideBar/theater_sidebar'
import ViewScreenList from '../componets/view_screenlist'


function Viewtheaterlistpage() {
    return (
        <div>
            <TheaterSidebar viewscreenlist={"sidebar-item active"} />
            <ViewScreenList />

        </div>
    )
}

export default Viewtheaterlistpage