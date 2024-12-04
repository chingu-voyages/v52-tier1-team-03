//react imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./auth/privateRoute";
import { AuthProvider } from "./auth/authContext";

//pages
import Admin from "./components/admin/admin_page";
import Nav from "./components/admin/admin_nav";
import Error from "./components/admin/admin_error";
import ResidentForm from "./components/resident/resident_form.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Nav />
                <ResidentForm />
            </>
        ),
        errorElement: <Error />,
    },
    {
        path: "/admin",
        element: (
            <>
                <Nav />
                <PrivateRoute element={Admin} />
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
