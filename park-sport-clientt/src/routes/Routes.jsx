import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Classes from "../pages/Classes/Classes";
import Instructors from "../pages/Instructors/Instructors";
import Dashboard from "../layout/Dashboard";
import MyBooking from "../pages/Dashboard/User/MyBooking/MyBooking";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import UserHome from "../pages/Dashboard/User/UserHome/UserHome";
import AddClasses from "../pages/Dashboard/Instructor/AddClasses/AddClasses";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import AllInstructors from "../pages/Dashboard/Admin/AllInstructors/AllInstructors";


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
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            // user route
            // {
            //     path: "userhome",
            //     element: <UserHome></UserHome>
            // },
            {
                path: "mybooking",
                element: <MyBooking></MyBooking>
            },
            {
                path: "payment",
                element: <Payment></Payment>
            },
            // instructor route
            {
                path: "addClasses",
                element: <AddClasses></AddClasses>
            },
            {
                path: "myClasses",
                element: <MyClasses></MyClasses>
            },
            // admin route
            {
                path: "allUsers",
                element: <AllUsers></AllUsers>
            },
            {
                path: "allInstructors",
                element: <AllInstructors></AllInstructors>
            }
        ]
    }
]);