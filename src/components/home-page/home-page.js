import React, {Fragment, useEffect} from "react";
import SectionOne from "./section-one";
import SectionTwo from "./section-two";
import SectionThree from "./section-three";
import SectionFour from "./section-four";
export default function HomePage() {
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
