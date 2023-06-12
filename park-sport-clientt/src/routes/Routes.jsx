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
import Payment from "../pages/Dashboard/User/Payment/Payment";
import AddClasses from "../pages/Dashboard/Instructor/AddClasses/AddClasses";
import MyClasses from "../pages/Dashboard/Instructor/MyClasses/MyClasses";
import MySelectedClass from "../pages/Dashboard/User/MySelectedClass/MySelectedClass";
import MyEnrolle from "../pages/Dashboard/User/MyEnrolle/MyEnrolle";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import ErrorPage from "../pages/Error/ErrorPage";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "mySelectedClass",
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: "myEnrolle",
                element: <MyEnrolle></MyEnrolle>
            },
            {
                path: "payment",
                element: <Payment></Payment>,
            },
            // instructor route
            {
                path: "addClasses",
                element: <InstructorRoute><AddClasses></AddClasses></InstructorRoute>
            },
            {
                path: "myClasses",
                element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
            },
            // admin route
            {
                path: "manageClasses",
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: "manageUsers",
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    }
]);