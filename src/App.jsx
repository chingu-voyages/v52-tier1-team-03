//react imports
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "./auth/privateRoute";
import { AuthProvider } from "./auth/authContext";

//pages
import AppHeader from "./components/base/app-header.jsx";
import AppFooter from "./components/base/app-footer.jsx";
import Error from "./components/admin/admin_error";

//admin
import AdminLogin from "./components/admin/admin_login.jsx";
import AdminPage from "./components/admin/admin_page";
import NewRequests from "./components/admin/admin_new-requests.jsx";
import ConfirmedRequests from "./components/admin/admin_confirmed-requests.jsx";

//resident
import ResidentForm from "./components/resident/resident_form.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <AppHeader />
                <ResidentForm />
                <AppFooter />
            </>
        ),
        errorElement: <Error />,
    },
    {
        path: "/admin",
        element: (
            <>
                <AppHeader />
                <AdminLogin />
                <AppFooter />
            </>
        ),
        errorElement: <Error />,
    },
    {
        path: "/adminpage",
        element: (
            <>
                <AppHeader />
                <PrivateRoute element={AdminPage} />
                <AppFooter />
            </>
        ),
        errorElement: <Error />,
    },
    {
        path: "/admin/newrequests",
        element: (
            <>
                <AppHeader />
                <PrivateRoute element={NewRequests} />
                <AppFooter />
            </>
        ),
        errorElement: <Error />,
    },
    {
        path: "/admin/confirmedrequests",
        element: (
            <>
                <AppHeader />
                <PrivateRoute element={ConfirmedRequests} />
                <AppFooter />
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
