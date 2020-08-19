import React, {Fragment} from "react";
import {Link} from "react-scroll";

export default function SectionFour() {
    return (
        <Fragment>
            <Link to={"section-four"} smooth={true} duration={1300}>
                {"Expériences et acquis"}
            </Link>
        </Fragment>
    );
}
