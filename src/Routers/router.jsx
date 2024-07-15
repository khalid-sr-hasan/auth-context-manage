import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/Error/ErrorPage";
import Order from "../components/Order/Order";
import PrivateRoute from "../components/Private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/order",
                element: (
                    <PrivateRoute>
                        <Order />
                    </PrivateRoute>
                ),
            },
        ],
    },
]);
export default router;
