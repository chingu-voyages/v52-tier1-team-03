import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import sunLogo from "/images/sun_logo.png";

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
            <div className="logos-container">
                <div className="app-header header-logo-hidden">
                    <img src={sunLogo} className="admin-sunlogo " alt="" />
                    <h1 className="logo-h1">SOLAR PLEXUS</h1>
                </div>

                <div className="logout-btn">
                    {!isAuthPage && (
                        <button onClick={handleLogout} aria-label="logout">
                            {/* hover feature? */}
                            <FaHome size={50} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AppHeader;
