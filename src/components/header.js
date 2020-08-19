import React, {Fragment, useState, useEffect} from "react";
import Navbar from "./nav-bar";
import {Parallax} from "react-scroll-parallax";
import ImgOne from "../mimified-img/banner-one.jpg";
import ImgTwo from "../mimified-img/banner-two.jpg";
import ImgThree from "../mimified-img/banner-three.jpeg";
import {useSpring, animated} from "react-spring";
export default function Header() {
    const [slideImg, setSlideImg] = useState(0);

    useEffect(() => {
        var init = setInterval(() => {
            setSlideImg(slideImg - 100);
            if (slideImg === -200) {
                setSlideImg(0);
            }
        }, 3000);
        return () => clearInterval(init);
    }, [slideImg]);
    console.log(slideImg);
    return (
        <Fragment>
            <Navbar />
            <div className={"header-slide"} id={"home"}>
                <div
                    className={"img-container"}
                    style={{transform: `translateX(${slideImg}%)`}}>
                    <img src={ImgOne} />
                    <img src={ImgTwo} />
                    <img src={ImgThree} />
                </div>
            </div>
        </Fragment>
    );
}
