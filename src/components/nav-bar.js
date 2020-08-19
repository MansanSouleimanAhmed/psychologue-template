import React, {useState} from "react";
import {useSpring, animated, useTrail} from "react-spring";
import {Parallax} from "react-scroll-parallax";
import Contact from "./nav-bar/contact";
import Home from "./nav-bar/home";
import SectionOne from "./nav-bar/section-one";
import SectionTwo from "./nav-bar/section-two";
import SectionThree from "./nav-bar/section-three";
import SectionFour from "./nav-bar/section-four";

export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);
    const items = [
        <Home />,
        <SectionOne />,
        <SectionTwo />,
        <SectionThree />,
        <SectionFour />,
        <Contact />,
    ];
    const config = {mass: 5, tension: 2000, friction: 200};
    const trail = useTrail(items.length, {
        config,
        height: toggleNav ? 20 : 2,
        opacity: toggleNav ? 1 : 0,
        margin: toggleNav ? 5 : 0,
    });

    https: return (
        <nav className={"nav-bar"}>
            <div
                className={"toggle-nav"}
                onClick={() => setToggleNav(toggleNav => !toggleNav)}>
                <div className={"item-one"}></div>
                <div className={"item-two"}></div>
                <div className={"item-three"}></div>
            </div>

            <div className={"toggle-item"}>
                {trail.map(({height, opacity, margin}, index) => (
                    <animated.div key={items[index]} className={"sub-item"}>
                        <animated.div
                            style={{height, opacity, margin}}
                            className={"item"}>
                            {items[index]}
                        </animated.div>
                    </animated.div>
                ))}
            </div>
        </nav>
    );
}
