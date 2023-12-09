import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "@/pages/home";

const routes = [
    {
        path: "/",
        element: <Home />,
    },
];

const Routes = () => {
    const routeElements = useRoutes(routes);

    return <>{routeElements}</>;
};

export default Routes;
