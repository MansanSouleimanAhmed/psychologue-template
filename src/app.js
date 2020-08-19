import React, {Fragment} from "react";
import Header from "./components/header.js";
import HomePage from "./components/home-page/home-page";
import Footer from "./components/footer";

function App() {
    return (
        <Fragment>
            <Header />
            <HomePage />
            <Footer />
        </Fragment>
    );
}

export default App;
