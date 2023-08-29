import React from 'react';
import { BACKGROUND_COLOR, FORGROUND_COLOR, TEXTCOLOR, TEXTCOLOR_DIM } from '../../const/const_color'
import "../../public/moviecardflip.css";

function MovieCardFlip(props) {

    return (

        <div class="col-lg-2 col-md-4 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg="" style={{ backgroundColor: "", height: 200, }}>

                    <div class="maincontainer">

                        <div class="thecard">

                            <div class="thefront" style={{ backgroundImage: `url(${props.imageurl})`, backgroundSize: 'cover' }}>
                            </div>

                            <div class="theback">
                                <h5>{props.moviename}</h5>
                                <p>{props.dis}</p>

                            </div>

                        </div>
                    </div>
                </div>
                <div class="product__item__text" style={{ padding: "0px", backgroundColor: "" }} >

                    <h6 style={{ color: TEXTCOLOR }}>{props.moviename}</h6>
                </div>
            </div>
        </div>


    )
}

export default MovieCardFlip