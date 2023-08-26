import React from 'react'
import { FORGROUND_COLOR, TEXTCOLOR, } from '../../const/const_color'
import "../../public/moviecardflip.css";

function Moviecards() {
    const heightofimage = 260;
    const widthofimage = 180;
    return (

        <div>
            <div className="card" style={{ backgroundColor: FORGROUND_COLOR }}>
                <div className="card-header" style={{ backgroundColor: FORGROUND_COLOR }} >
                    <h4 style={{ color: TEXTCOLOR }}>Explore More Movies</h4>
                </div>
                <div className="card-content pb-4">
                    <div className="recent-message d-flex px-4 py-3">
                        <div class="row">
                            <div class="col-lg-2 col-md-4 col-sm-6" >
                                <div class="product__item">
                                    <div class="product__item__pic set-bg">
                                        <div class="ep">18 / 18</div>
                                        <img src="img/trending/trend-1.jpg" style={{ height: heightofimage, width: widthofimage }} alt=""></img>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text" style={{ padding: "0px" }} >
                                        <ul>
                                            <li style={{ color: TEXTCOLOR }}>Active</li>
                                            <li style={{ color: TEXTCOLOR }}>Movie</li>
                                        </ul>
                                        <h6 style={{ color: TEXTCOLOR }}>The Seven Deadly Sins: Wrath of the Gods</h6>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg">
                                        <div class="ep">18 / 18</div>
                                        <img src="img/trending/trend-3.jpg" style={{ height: heightofimage, width: widthofimage }} alt=""></img>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5 style={{ color: TEXTCOLOR }}>Shingeki no Kyojin Season 3 Part 2</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="">
                                        <div class="ep">18 / 18</div>
                                        <img src="img/trending/trend-4.jpg" style={{ height: heightofimage, width: widthofimage }} alt=""></img>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5 style={{ color: TEXTCOLOR }}>Fullmetal Alchemist: Brotherhood</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg" data-setbg="">
                                        <div class="ep">18 / 18</div>
                                        <img src="img/trending/trend-5.jpg" style={{ height: heightofimage, width: widthofimage }} alt=""></img>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5 style={{ color: TEXTCOLOR }}>Shiratorizawa Gakuen Koukou</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg">
                                        <div class="ep">18 / 18</div>
                                        <img src="img/trending/trend-6.jpg" style={{ height: heightofimage, width: widthofimage }} alt=""></img>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5 style={{ color: TEXTCOLOR }}>Code Geass: Hangyaku no Lelouch R2</h5>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-6">
                                <div class="product__item">
                                    <div class="product__item__pic set-bg">
                                        <div class="ep">18 / 18</div>
                                        <img src="img/trending/trend-6.jpg" style={{ height: heightofimage, width: widthofimage }} alt=""></img>
                                        <div class="comment"><i class="fa fa-comments"></i> 11</div>
                                        <div class="view"><i class="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div class="product__item__text">
                                        <ul>
                                            <li>Active</li>
                                            <li>Movie</li>
                                        </ul>
                                        <h5 style={{ color: TEXTCOLOR }}>Code Geass: Hangyaku no Lelouch R2</h5>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className="recent-message d-flex px-4 py-3">


                    </div>
                    <div className="recent-message d-flex px-4 py-3">

                    </div>
                    <div className="px-4" style={{ color: TEXTCOLOR }}>
                        <button className="btn btn-block btn-xl btn-light-primary font-bold mt-3">
                            Find More
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Moviecards