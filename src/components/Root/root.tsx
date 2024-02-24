import React from "react";
import Header from "../Header/Components/header";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer";

const Root = () => {
    return(
        <div className="App">
            <Header />
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default Root;