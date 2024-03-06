import React from "react";
import { createBrowserRouter } from "react-router-dom"
import Start from "../pages/Start/start";
import Player from "../pages/Player/player";
import Projects from "../pages/Projects/projects";
import Contact from "../pages/Contact/contact";
import Notfound from "../pages/NotFound/notFound";
import Root from "../components/Root/root";

const Router = createBrowserRouter([
{
    path: "/",
    element: <Root/>,
    children: [
        {
            index: true,
            path: "/",
            element: <Start/>
        },
        {
            path: "/player",
            element: <Player/>
        },
        {
            path: "/projetos",
            element: <Projects/>
        },
        {
            path: "/contato",
            element: <Contact/>
        },
        {
            path: "*",
            element: <Notfound/>
        },
    ]
},

]);

export default Router;