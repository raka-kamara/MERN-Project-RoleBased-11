import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import PrivateRoute from "../Routes/PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome";
import AddReview from "../Pages/Dashboard/AddReview";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main/>,
        children:[
          {  
            path: '/',
            element: <Home/>
        },
          {  
            path: 'menu',
            element: <Menu/>
        },
          {  
            path: 'order/:category',
            element: <Order/>
        },
          {  
            path: 'login',
            element: <Login/>
        },
          {  
            path: 'signup',
            element: <SignUp/>
        },
        ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children:[
        // normal user routes
        {
          path: 'UserHome',
          element: <UserHome/>
        },
        {
          path: 'cart',
          element: <Cart/>
        },
        {
          path: 'payment',
          element: <Payment/>
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistory/>
        },
        {
          path: 'addReview',
          element: <AddReview/>
        },
        
        //Admin only routes
        {
          path: 'allUsers',
          element: <AdminRoute><AllUsers/></AdminRoute>
        }, 
        {
          path: 'AdminHome',
          element: <AdminRoute><AdminHome/></AdminRoute>
        }, 
        {
          path: 'addItems',
          element: <AdminRoute><AddItems/></AdminRoute>
        }, 
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems/></AdminRoute>
        }, 
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem/></AdminRoute>,
          loader: ({params}) => fetch(`https://chef-s-place-server.vercel.app/menu/${params.id}`)
        }, 
      ]
    }
])