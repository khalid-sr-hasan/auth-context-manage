import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoute;
