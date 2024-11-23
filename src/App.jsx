//react imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./auth/privateRoute.jsx";
import { AuthProvider } from "./auth/authContext.jsx";

//pages
import Admin from "./components/admin/admin_page.jsx";
import Login from "./components/admin/admin_login.jsx";
import Nav from "./components/admin/admin_nav.jsx";
import Error from "./components/admin/admin_error.jsx";
import ResidentForm from "./components/resident/resident_form.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Nav />
                <Login />
            </>
        ),
        errorElement: <Error />,
    },
    {
        path: "/adminpage",
        element: (
            <>
                <Nav />
                <PrivateRoute element={Admin} />
            </>
        ),
        errorElement: <Error />,
    },
    {
        path: "/resident-form",
        element: (
            <>
                <Nav />
                <ResidentForm />
            </>
        ),
        errorElement: <Error />,
    },
]);
function App() {
    return (
        <AuthProvider>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </AuthProvider>
    );
}

export default App;
