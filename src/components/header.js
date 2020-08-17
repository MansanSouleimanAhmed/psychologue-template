import React, {Fragment} from "react";
import Navbar from "./nav-bar";
import {Parallax} from "react-scroll-parallax";
import ImgOne from "../mimified-img/banner-one.jpg";
import ImgTwo from "../mimified-img/banner-two.jpg";
import ImgThree from "../mimified-img/banner-three.jpeg";

export default function Header() {
    return (
        <Fragment>
            <Navbar />
            <div className={"header-slide"}>
                <img src={ImgOne} />
                <img src={ImgTwo} />
                <img src={ImgThree} />
            </div>
        </Fragment>
    );
}
