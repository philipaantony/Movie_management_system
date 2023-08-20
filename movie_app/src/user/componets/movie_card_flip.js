import React from 'react';
import { BACKGROUND_COLOR, FORGROUND_COLOR, TEXTCOLOR, TEXTCOLOR_DIM } from '../../const/const_color'
import "../../public/moviecardflip.css";

function MovieCardFlip(props) {
    const heightofimage = 220;
    const widthofimage = 165;
    return (

        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="" style={{ backgroundColor: "", height: heightofimage, }}>

                    <div className="maincontainer">
                        <div className="thecard">
                            <div className="thefront">

                                <div class="ep">18 / 18</div>
                                <img src={props.imageurl} style={{ height: heightofimage, width: widthofimage }} alt=""></img>

                            </div>
                            <div className="theback">
                                <h1>{props.moviename}</h1>
                                <p>Your use of this site is subject to the terms </p>
                                <button>Submit</button></div>
                        </div>
                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                    </div>
                </div>
                <div class="product__item__text" style={{ padding: "0px", backgroundColor: "" }} >
                    <ul>
                        <li style={{ color: TEXTCOLOR }}>Active</li>
                        <li style={{ color: TEXTCOLOR }}>Movie</li>
                    </ul>
                    <h6 style={{ color: TEXTCOLOR }}>The Seven Deadly Sins: Wrath of the Gods</h6>
                </div>
            </div>
        </div>


    )
}

export default MovieCardFlip