import React from "react";
import ShareIcon from '@mui/icons-material/Share';
import "../moviecards/moviecard.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import LinkIcon from '@mui/icons-material/Link';
import FiberNewIcon from '@mui/icons-material/FiberNew';

function Moviecard() {
  return (
    <div>
      <div class="movie_card" id="bright" style={{height:"210px"}}>
        <div class="info_section">
          <div class="movie_header">
            <img
              class="locandina"
              src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
            />
            <h1>Bright The New King</h1>
          </div>
          <div class="movie_desc">
            <p class="text">
             Coming Soon...! 
            </p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <i><ShareIcon/></i>
              </li>
              <li>
                <i><FavoriteIcon/></i>
              </li>
              <li>
                <i><LinkIcon/></i>
              </li>
            </ul>
          </div>
        </div>
        <div style={{padding:"20px"}}><FiberNewIcon/></div>
      </div> 
    </div>
  );
}

export default Moviecard;
