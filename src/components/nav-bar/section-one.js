import React, {Fragment} from "react";
import {Link} from "react-scroll";

export default function SectionOne() {
    return (
        <Fragment>
            <Link to={"section-one"} smooth={true} duration={1300}>
                {"Activités"}
            </Link>
        </Fragment>
    );
}
