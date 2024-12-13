import React, { useState, useEffect } from "react";

const CompletedRequests = () => {
    const [completedRequests, setCompletedRequests] = useState([]);

    useEffect(() => {
        const storedRequests = JSON.parse(localStorage.getItem("requests"));

        if (storedRequests && Array.isArray(storedRequests)) {
            const filteredRequests = storedRequests.filter(
                (request) => request.status === "completed"
            );
            setCompletedRequests(filteredRequests);
        }
    }, []);

    return (
        <div className="completed-requests">
            <div className="admin_new-requests-content">
                <div className="sectionHeader_desktop">
                    <h2>Completed Appointment Requests</h2>
                    <hr className="divider" />
                </div>

                <div className="dashboard_cards">
                    {completedRequests.length === 0 ? (
                        <p>No completed requests available.</p>
                    ) : (
                        completedRequests.map((request, index) => (
                            <div key={index} className="dashboard_card">
                                <div className="card-top-border"></div>
                                <h3>{request.name}</h3>
                                <div className="card_content-wrapper">
                                    <div className="card-content">
                                        <p>
                                            Preferred Timeslot:{" "}
                                            {request.timeslot}
                                        </p>
                                        <p>
                                            {request.street}, {request.zipcode}
                                        </p>
                                        <p>{request.phoneNumber}</p>
                                        <p>{request.email}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompletedRequests;
