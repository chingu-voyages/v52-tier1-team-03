import React from "react";

const AdminPage = () => {
    return (
        <div className="admin-page">
            <div className="admin-dashboard">
                <div className="sectionHeader_desktop">
                    <h2>Good morning, [USER_NAME]</h2>
                    <hr className="divider" />
                </div>
                <div className="dashboard_cards">
                    <div className="appt_requests-wrapper">
                        <div className="card-top-border"></div>

                        <h3>Appointment Requests</h3>
                        
                        <div className="appt_requests-content">
                            <div className="request-number">
                                <label>New</label>

                                <div className="list">                                <option>
                                    <span>#{/* jsx: data pulled from the local storage */}</span><span>view</span>
                                </option></div>
                            </div>

                            <div className="request-confirmed">
                                <label>Confirmed</label>
                            </div>
                        </div>
                    </div>
                    <div className="completed-visits">
                        <div className="card-top-border"></div>
                        <p>Completed Visits</p>
                        {/* jsx: data pulled from the local storage */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

