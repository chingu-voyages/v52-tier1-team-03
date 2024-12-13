import React from "react";

const AdminPage = () => {
    return (
        <div className="admin-page">
            <div className="admin_page-content">
                <div className="sectionHeader_desktop">
                    <h2>Good morning, [USER_NAME]</h2>
                    <hr className="divider" />
                </div>

                <div className="dashboard_cards">
                    <div className="dashboard_card">
                        <div className="card-top-border"></div>

                        <h3>Appointment Requests</h3>
                        
                        <div className="card_content-wrapper">
                            <div className="card-content">
                                <label>New</label>
                                
                                <div className="list">
                                    <span>#</span><span>view</span>
                                </div>
                                <hr className="list-divider" />
                            </div>

                            <div className="card-content">
                                <label>Confirmed</label>
                                
                                <div className="list">
                                    <span>#</span><span>view</span>
                                </div>
                                <hr className="list-divider" />
                            </div>
                        </div>
                    </div>

                    <div className="dashboard_card">
                        <div className="card-top-border"></div>

                        <h3>Completed Visits</h3>
                        
                        <div className="card_content-wrapper">
                            <div className="card-content">
                                
                                
                                <div className="list">
                                    <span>#</span><span>view</span>
                                </div>
                                <hr className="list-divider" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;

