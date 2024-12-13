import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";


const AppHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthPage =
        location.pathname === "/" || location.pathname === "/login";

    const handleLogout = async () => {
        await fetch("/logout", { method: "POST" });
        navigate("/");
    };

    return (
        <div className="app-header">

            <div className="logout-btn">
                {!isAuthPage && (
                    <button
                        onClick={handleLogout}
                        aria-label="logout"
                    >
                        {/* hover feature? */}
                        <FaHome size={50} /> 
                    </button>
                )}
            </div>
        </div>
    );
};

export default AppHeader;
