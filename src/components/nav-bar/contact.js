import React, {Fragment} from "react";
import {Link} from "react-scroll";
export default function Contact() {
    return (
        <Fragment>
            <Link to={"contact"} smooth={true} duration={1300}>
                {"Contact"}
            </Link>
        </Fragment>
    );
}
