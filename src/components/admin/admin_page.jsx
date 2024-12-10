import React from "react";

const Admin = () => {
    return (
        <>
            <div className="admin-dashboard">
                <div className="sectionHeader_desktop">
                {/* - DESIGN CHANGE - */}
                <h1>Welcome Back</h1>
                {/* <h1>Good Morning, {USER_NAME}</h1>*/}
                </div>
                <div className="dashboard_cards">
                    <div className="appt-requests">
                        <div className="card-banner-top" />
                        <h4>Appointment Requests</h4>
                        
                        <label>New</label>
                        {/* jsx: data pulled from the local storage */}

                        <label>Confirmed</label>
                        {/* jsx: data pulled from the local storage */}
                    </div>
                    <div className="completed-vists">
                        <div className="card-banner-top" />
                        <h4>Completed Visits</h4>
                        {/* jsx: data pulled from the local storage */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Admin;

