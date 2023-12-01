import React from 'react'
import TheaterSidebar from '../SideBar/theater_sidebar'
import { useLocation } from "react-router-dom";
import AssignMovieToScreen from '../componets/assign_movie_to_screen'

function AssignMovieToScreenPage() {

  const location = useLocation();
  
  const screenid = location.state.screenid;
  const seatcount = location.state.seatcount;
  const trid = location.state.trid;


  return (
    
    <div>
        <TheaterSidebar/>
        <AssignMovieToScreen seatcount={seatcount} screenid={screenid} trid={trid}/>
    </div>
  )
}

export default AssignMovieToScreenPage