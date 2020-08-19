import React, {Fragment} from "react";
import {Link} from "react-scroll";

export default function SectionTwo() {
    return (
        <Fragment>
            <Link to={"section-two"} smooth={true} duration={1300}>
                {"Psychologie et Psychanalyse"}
            </Link>
        </Fragment>
    );
}
