import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard_cards.css";


const AdminPage = () => {
    const [newRequestsCount, setNewRequestsCount] = useState(0);
    const [confirmedRequestsCount, setConfirmedRequestsCount] = useState(0);
    const [completedRequestsCount, setCompletedRequestCount] = useState(0);
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour < 12) {
            setGreeting("Good morning ☀️");
        } else if (currentHour < 17) {
            setGreeting("Good afternoon 🌞🕛");
        } else {
            setGreeting("Good evening 🌇");
        }

        const storedRequests = JSON.parse(localStorage.getItem("requests"));

        if (storedRequests && Array.isArray(storedRequests)) {
            const newRequests = storedRequests.filter(
                (request) => request.status === "new"
            );
            setNewRequestsCount(newRequests.length);

            const confirmedRequests = storedRequests.filter(
                (request) => request.status === "confirmed"
            );
            setConfirmedRequestsCount(confirmedRequests.length);

            const completedRequests = storedRequests.filter(
                (request) => request.status === "completed"
            );
            setCompletedRequestCount(completedRequests.length);
        }
    }, []);

    return (
        <div className="admin-page">
            <div className="admin_page-content">
                <div className="sectionHeader_desktop">
                    <h2 className="admin-h2">{greeting} , Admin</h2>
                    <div className="admin-divider"></div>
                </div>

                <div className="dashboard_cards">
                    <div className="dashboard_card">
                        <div className="card-top-border"></div>

                        <h3>Appointment Requests</h3>

                        <div className="card_content-wrapper">
                            <div className="card-content">
                                <label className="label-title">New</label>
                                <div className="list">
                                    <span>{newRequestsCount}</span>
                                    <Link to="/admin/newrequests" className="custom-link">view</Link>
                                </div>
                                <hr className="list-divider" />
                            </div>

                            <div className="card-content">
                                <label className="label-title">Confirmed</label>
                                <div className="list">
                                    <span>{confirmedRequestsCount}</span>
                                    <Link to="/admin/confirmedrequests" className="custom-link">
                                        view
                                    </Link>
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
                                    <span>{completedRequestsCount}</span>
                                    <Link to="/admin/completedrequests" className="custom-link">
                                        view
                                    </Link>
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
