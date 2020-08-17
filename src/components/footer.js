import React, {Fragment} from "react";

export default function Footer() {
    return (
        <Fragment>
            <footer className={"footer"}>
                <div className={"contact"}>
                    <p>
                        {
                            "Addresse du cabinet privé à Liège : Quai de Rome 82, 4000 Liège"
                        }
                    </p>
                    <p>{"Télephone : 0479217263 "}</p>
                    <hr />
                    <p>
                        {
                            "Addresse  à Bruxelles : Rue Antoine Dansaert 42, 1000 Bruxelles"
                        }
                    </p>
                    <p>{"Télephone :  0479217263 "}</p>
                    <hr />
                    <p>
                        {
                            "Addresse : CHU Liège Site policlinique Lucien Brull Quai Godefroid Kurth 45, 4020 Liège"
                        }
                    </p>
                    <hr />
                </div>
                <div className={"input"}>
                    <input type={"text"} placeholder={"Name"} />
                    <input type={"text"} placeholder={"Email"} />
                    <input type={"text"} placeholder={"Sujet"} />
                    <br />
                    <textarea type={"textarea"} placeholder={"Message"} />
                    <br />
                    <button>{"Envoyer"}</button>{" "}
                </div>
            </footer>
        </Fragment>
    );
}
