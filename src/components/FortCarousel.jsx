import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";
import '../styles/fortCarousel.css';

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
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <Slider {...settings}>
                        <div>
                            <img className="img-fluid" src="/images/fort-banner1.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid" src="/images/fort-banner2.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid" src="/images/fort-banner3.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid" src="/images/fort-banner4.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid" src="/images/fort-banner5.png" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
