//react imports
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import { AuthProvider } from './auth/authContext';

//pages
import Admin from './components/admin/admin_page';
import Login from './components/admin/admin_login';
import Nav from './components/admin/admin_nav';
import Error from './components/admin/admin_error';
import ResidentForm from './components/resident/resident_form';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Nav />
                <Login />
            </>
        ),
        errorElement: <Error />
    },
    {
        path: '/adminpage',
        element: (
            <>
                <Nav />
                <PrivateRoute element={Admin} />
            </>
        ),
        errorElement: <Error />
    },
    {
        path: '/resident-form',
        element: (
            <>
                <Nav />
                <ResidentForm />
            </>
        ),
        errorElement: <Error />
    },
])
function App() {
    return (
        <AuthProvider>
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </AuthProvider>
    );
};

export default App;
