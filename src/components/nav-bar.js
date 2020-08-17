import React, {useState} from "react";
import {useSpring, animated, useTrail} from "react-spring";
import {Parallax} from "react-scroll-parallax";
export default function Navbar() {
    const [toggleNav, setToggleNav] = useState(false);
    const items = [
        "Home",
        "Formation",
        "Activités",
        "Expériences et acquis",
        "Psychologie et Psychanalyse",
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
