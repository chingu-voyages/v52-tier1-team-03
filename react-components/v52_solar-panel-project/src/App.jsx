//react imports
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import { AuthProvider } from './auth/authContext';

//pages
import Login from './components/admin_login';
import Nav from './components/admin_nav';
import Error from './components/admin_error';
import Admin from './components/admin_page';

const router = createBrowserRouter([
 {
  path:'/',
  element: (
    <>
       <Nav />
       <Login />
    </>
  ),
   errorElement: <Error />
 },
 {
  path:'/adminpage',
  element: (
    <>
       <Nav />
       <PrivateRoute element={Admin} />
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