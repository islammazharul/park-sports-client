import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/classes",
                element: <Classes></Classes>
            },
            {
                path: "/instructors",
                element: <Instructors></Instructors>
            }
        ]
    },
]);