import React from "react"
import { RouterProvider } from "react-router-dom"

import Router from "./routes";

const AppRouter = () => {
    return(
        <RouterProvider router={Router}/>
    )
}

export default AppRouter;