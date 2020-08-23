import React, {Fragment} from "react";
import {Link} from "react-scroll";
import {useSelector, useDispatch} from "react-redux";
import {ToggleAction} from "../../../action/toggle-action";
export default function SectionTwo() {
    const toggle = useSelector(state => state.ToggleReducer);
    const dispatch = useDispatch();
    return (
        <Fragment>
            <Link to={"section-two"} smooth={true} duration={1300}>
                <p onClick={() => dispatch(ToggleAction())}>
                    {"Psychologie et Psychanalyse"}
                </p>
            </Link>
        </Fragment>
    );
}
