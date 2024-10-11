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
        {
          path: 'cart',
          element: <Cart/>
        }
      ]
    }
])