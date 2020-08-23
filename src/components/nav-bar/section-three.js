import React, {Fragment} from "react";
import {Link} from "react-scroll";
import {useSelector, useDispatch} from "react-redux";
import {ToggleAction} from "../../../action/toggle-action";
export default function SectionThree() {
    //You access to the store.
    const toggle = useSelector(state => state.ToggleReducer);
    const dispatch = useDispatch();
    return (
        <Fragment>
            <Link to={"section-three"} smooth={true} duration={1300}>
                <p onClick={() => dispatch(ToggleAction())}>{"Formation"}</p>
            </Link>
        </Fragment>
    );
}
