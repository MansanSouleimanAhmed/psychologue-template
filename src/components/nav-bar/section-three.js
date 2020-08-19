import React, {Fragment} from "react";
import {Link} from "react-scroll";

export default function SectionThree() {
    return (
        <Fragment>
            <Link to={"section-three"} smooth={true} duration={1300}>
                {"Formation"}
            </Link>
        </Fragment>
    );
}
