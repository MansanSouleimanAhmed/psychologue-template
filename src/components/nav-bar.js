import React, {useState} from "react";
import {useSpring, animated, useTrail} from "react-spring";
import {Parallax} from "react-scroll-parallax";
import Contact from "./nav-bar/contact";
import Home from "./nav-bar/home";
import SectionOne from "./nav-bar/section-one";
import SectionTwo from "./nav-bar/section-two";
import SectionThree from "./nav-bar/section-three";
import SectionFour from "./nav-bar/section-four";
import {useSelector, useDispatch} from "react-redux";
import {ToggleAction} from "../../action/toggle-action";

export default function Navbar() {
    //  const [toggleNav, setToggleNav] = useState(false);
    const toggleNav = useSelector(state => state.ToggleReducer);
    const dispatch = useDispatch();
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
        height: toggleNav ? 10 : 2,
        opacity: toggleNav ? 1 : 0,
        marginTop: toggleNav ? 15 : 0,
    });

    https: return (
        <nav className={"nav-bar"}>
            <div
                className={"toggle-nav"}
                onClick={() => dispatch(ToggleAction())}>
                <div className={"item-one"}></div>
                <div className={"item-two"}></div>
                <div className={"item-three"}></div>
            </div>

            <div className={"toggle-item"}>
                {trail.map(({height, opacity, marginTop}, index) => (
                    <animated.div key={items[index]} className={"sub-item"}>
                        <animated.div
                            style={{height, opacity, marginTop}}
                            className={"item"}>
                            {items[index]}
                        </animated.div>
                    </animated.div>
                ))}
            </div>
        </nav>
    );
}
