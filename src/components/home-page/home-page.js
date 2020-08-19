import React, {Fragment, useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionOne from "./section-one";
import SectionTwo from "./section-two";
import SectionThree from "./section-three";
import SectionFour from "./section-four";
export default function HomePage() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);
    return (
        <Fragment>
            <SectionOne />
            <hr />
            <SectionTwo />
            <hr />
            <SectionThree />
            <hr />
            <SectionFour />
        </Fragment>
    );
}
