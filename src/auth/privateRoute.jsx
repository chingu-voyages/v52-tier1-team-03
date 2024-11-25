import React from "react";
import { useAuth } from "./authContext";
import Login from "../components/admin/admin_login";

const PrivateRoute = ({ element: Component, ...rest }) => {
    const { user } = useAuth();

    if (!user) {
        return <Login {...rest} />;
    }

    return <Component {...rest} />;
};

export default PrivateRoute;
