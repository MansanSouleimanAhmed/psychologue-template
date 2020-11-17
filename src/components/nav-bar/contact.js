import React, {Fragment} from "react";
import {Link} from "react-scroll";
import {useSelector, useDispatch} from "react-redux";
import {ToggleAction} from "../../../action/toggle-action";
export default function Contact() {
    //You access to the store.
    const toggle = useSelector(state => state.ToggleReducer);
    const dispatch = useDispatch();

    return (
        <Fragment>
            <div>
                <Link to={"contact"} smooth={true} duration={1300}>
                    <p onClick={() => dispatch(ToggleAction())}>{"Contact"}</p>
                </Link>
            </div>
        </Fragment>
    );
}
