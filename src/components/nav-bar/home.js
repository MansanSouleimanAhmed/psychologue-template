import React, {Fragment} from "react";
import {Link} from "react-scroll";
export default function Home() {
    return (
        <Fragment>
            <Link to={"home"} smooth={true} duration={1300}>
                {"Home"}
            </Link>
        </Fragment>
    );
}
