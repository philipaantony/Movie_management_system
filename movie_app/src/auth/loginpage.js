import React from 'react'


import Movietemplatecss from '../public/movietemplatecss'

function LoginPage() {
    return (
        <div>

            <header class="header">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2">
                            <div class="header__logo">
                                <a >
                                    <img src="img/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="header__nav">
                                <nav class="header__menu mobile-menu">
                                    <ul>
                                        <li><a href="./index.html">Homepage</a></li>
                                        <li><a href="./categories.html">Categories <span class="arrow_carrot-down"></span></a>
                                            <ul class="dropdown">
                                                <li><a href="./categories.html">Categories</a></li>
                                                <li><a href="./anime-details.html">Anime Details</a></li>
                                                <li><a href="./anime-watching.html">Anime Watching</a></li>
                                                <li><a href="./blog-details.html">Blog Details</a></li>
                                                <li><a href="./signup.html">Sign Up</a></li>
                                                <li><a href="./login.html">Login</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="./blog.html">Our Blog</a></li>
                                        <li><a href="#">Contacts</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-lg-2">
                            <div class="header__right">
                                <a href="#" class="search-switch"><span class="icon_search"></span></a>
                                <a href="./login.html"><span class="icon_profile"></span></a>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </header>

            <section class="normal-breadcrumb set-bg" style={{ filter: " brightness(0.7)", backgroundImage: `url("img/loginbg.jpg")` }}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="normal__breadcrumb__text">
                                <h2>Login</h2>
                                <p>Welcome to the official Anime blog.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section class="login spad">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="login__form">

                                <h3>Login</h3>
                                <form action="#">
                                    <div class="input__item">
                                        <input type="text" placeholder="Email address" />
                                        <span class="icon_mail"></span>
                                    </div>
                                    <div class="input__item">
                                        <input type="text" placeholder="Password" />
                                        <span class="icon_lock"></span>
                                    </div>
                                    <button type="submit" class="site-btn">Login Now</button>
                                </form>
                                <a href="#" class="forget_pass">Forgot Your Password?</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="login__register">
                                <h3>Dont’t Have An Account?</h3>
                                <a href="#" class="primary-btn">Register Now</a>
                            </div>
                        </div>
                    </div>
                    <div class="login__social">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-6">
                                <div class="login__social__links">
                                    <span>or</span>
                                    <ul>
                                        <li><a href="#" class="facebook"><i class="fa fa-facebook"></i> Sign in With
                                            Facebook</a></li>
                                        <li><a href="#" class="google"><i class="fa fa-google"></i> Sign in With Google</a></li>
                                        <li><a href="#" class="twitter"><i class="fa fa-twitter"></i> Sign in With Twitter</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="page-up">
                    <a href="#" id="scrollToTopButton"><span class="arrow_carrot-up"></span></a>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="footer__logo">
                                <a href="./index.html"><img src="img/logo.png" alt="" /></a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="footer__nav">
                                <ul>
                                    <li class="active"><a href="./index.html">Homepage</a></li>
                                    <li><a href="./categories.html">Categories</a></li>
                                    <li><a href="./blog.html">Our Blog</a></li>
                                    <li><a href="#">Contacts</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3">
                            <p>
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>

                        </div>
                    </div>
                </div>
            </footer>

            <div class="search-model">
                <div class="h-100 d-flex align-items-center justify-content-center">
                    <div class="search-close-switch"><i class="icon_close"></i></div>
                    <form class="search-model-form">
                        <input type="text" id="search-input" placeholder="Search here....." />
                    </form>
                </div>
            </div>

            <script src="js/jquery-3.3.1.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/player.js"></script>
            <script src="js/jquery.nice-select.min.js"></script>
            <script src="js/mixitup.min.js"></script>
            <script src="js/jquery.slicknav.js"></script>
            <script src="js/owl.carousel.min.js"></script>
            <script src="js/main.js"></script>
        </div>
    )
}

export default LoginPage