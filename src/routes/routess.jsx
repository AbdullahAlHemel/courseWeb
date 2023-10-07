
import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home/Home";
import Roots from "../layouts/Roots";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import News from "../pages/Home/News";
import PrivateRoute from "./PrivateRoute";
import About from "../About";
import ErrorPage from "../ErrorPage";
import Carrier from "./Carrier";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Roots></Roots>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path:'/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: () => fetch('/event.json')
                
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/about',
                element:<PrivateRoute><About></About></PrivateRoute>
            },
            {
                path:'/career',
                element:<PrivateRoute><Carrier></Carrier></PrivateRoute>
            },
            // {
            //     path: '/phones/:id',
            //     element: <Phone></Phone>,
            //     loader: () => fetch('/News.json')
                
            // }
            
            
        ]
    }
]

);

export default router;