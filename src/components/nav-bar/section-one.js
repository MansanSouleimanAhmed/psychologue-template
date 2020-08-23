import React, {Fragment} from "react";
import {Link} from "react-scroll";
import {useSelector, useDispatch} from "react-redux";
import {ToggleAction} from "../../../action/toggle-action";
export default function SectionOne() {
    const toggle = useSelector(state => state.ToggleReducer);
    const dispatch = useDispatch();
    return (
        <Fragment>
            <Link to={"section-one"} smooth={true} duration={1300}>
                <p onClick={() => dispatch(ToggleAction())}>{"Activités"}</p>
            </Link>
        </Fragment>
    );
}
