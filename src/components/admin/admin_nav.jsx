import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoExitOutline } from 'react-icons/io5';

const Nav = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthPage = location.pathname === '/' || location.pathname === '/register';

    const handleLogout = async () => {
        await fetch('/logout', { method: 'POST' });
        navigate('/');
    };

    return (
        <nav className="nav">
            <div className="nav-icon">
              {/* nav icon goes here */}
            </div>

            <div className="nav-btns">
                {
                    !isAuthPage && (
                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                            aria-label="logout"
                        >
                            <span>Go Back</span>
                            <IoExitOutline />
                        </button>
                    )
                }
            </div>
        </nav>
    );
};

export default Nav;
