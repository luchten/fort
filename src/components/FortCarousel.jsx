import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import '../styles/fortCarousel.css';
import { Link } from "gatsby";

export default function FortCarousel() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        arrows: false
    };
    return (
        <div className="container-fluid margin-top">
            <div className="row">
                <div className="col">
                    <Slider {...settings}>
                        <div>
                            <Link to="#"><img className="img-fluid" src="/fort/images/fort-banner1.png" alt="" /></Link>
                        </div>
                        <div>
                            <Link to="#"><img className="img-fluid" src="/fort/images/fort-banner2.png" alt="" /></Link>
                        </div>
                        <div>
                            <Link to="#"><img className="img-fluid" src="/fort/images/fort-banner3.png" alt="" /></Link>
                        </div>
                        <div>
                            <Link to="#"><img className="img-fluid" src="/fort/images/fort-banner4.png" alt="" /></Link>
                        </div>
                        <div>
                            <Link to="#"><img className="img-fluid" src="/fort/images/fort-banner5.png" alt="" /></Link>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
