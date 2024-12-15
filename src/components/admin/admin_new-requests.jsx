import React, { useState, useEffect } from "react";
import "../../styles/appointment-req.css";

const NewRequests = () => {
    const [newRequests, setNewRequests] = useState([]);
    const [sortOption, setSortOption] = useState("by-name");

    useEffect(() => {
        const storedRequests = JSON.parse(localStorage.getItem("requests"));

        if (storedRequests && Array.isArray(storedRequests)) {
            const filteredRequests = storedRequests.filter(
                (request) => request.status === "new",
            );
            setNewRequests(filteredRequests);
        }
    }, []);

    const sortRequests = (requests) => {
        const sortedRequests = [...requests];
        switch (sortOption) {
            case "by-name":
                return sortedRequests.sort((a, b) =>
                    a.name.localeCompare(b.name),
                );
            case "by-timeslot":
                return sortedRequests.sort((a, b) => a.timeslot - b.timeslot);
            case "by-address":
                return sortedRequests.sort((a, b) =>
                    a.street.localeCompare(b.street),
                );
            case "by-phonenum":
                return sortedRequests.sort((a, b) =>
                    a.phoneNumber.localeCompare(b.phoneNumber),
                );
            case "by-email":
                return sortedRequests.sort((a, b) =>
                    a.email.localeCompare(b.email),
                );
            default:
                return sortedRequests;
        }
    };

    useEffect(() => {
        setNewRequests((prevRequests) => sortRequests(prevRequests));
    }, [sortOption]);

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const isEqualRequest = (r1, r2) => {
        return (
            r1.name == r2.name &&
            r1.email == r2.email &&
            r1.phoneNumber == r2.phoneNumber &&
            r1.street == r2.street &&
            // r1.city == r2.city && // everything should be la
            // r1.state == r2.state && // everything should be Ca, if not we got other problems
            r1.zipcode == r2.zipcode &&
            r1.date == r2.date &&
            r1.timeslot == r2.timeslot &&
            r1.status == r2.status
        );
    };

    const handleConfirm = (index) => {
        // FIX: this is a hacked solution,
        // should instead refactor the way newRequests works to use the actual index or something similar
        const updatedRequests = [...newRequests];
        const confirmedRequest = updatedRequests.splice(index, 1)[0];
        const storedRequests = JSON.parse(localStorage.requests) || []; // NOTE: this should never be empty at this point

        setNewRequests(updatedRequests);

        // Find and update the confirmed request
        const confirmedRequestLocation = storedRequests.findIndex((request) =>
            isEqualRequest(request, confirmedRequest),
        );
        storedRequests[confirmedRequestLocation].status = "confirmed";

        localStorage.setItem("requests", JSON.stringify(storedRequests));
    };

    const handleCancel = (index) => {
        const updatedRequests = [...newRequests];
        updatedRequests[index].status = "cancelled";
        setNewRequests(updatedRequests);

        localStorage.setItem("requests", JSON.stringify(updatedRequests));
    };

    return (
        <div className="admin_new-requests">
            <div className="admin_new-requests-content">
                <div className="sectionHeader_desktop">
                    <h2>New Appointment Requests</h2>
                    <hr className="divider" />
                    <div className="new_requests-dropdown">
                        <label className="label-padding" htmlFor="sortby">
                            Sort By :
                        </label>
                        <select
                            id="sortby"
                            value={sortOption}
                            onChange={handleSortChange}
                        >
                            <option value="by-name">By Name</option>
                            <option value="by-timeslot">By Timeslot</option>
                            <option value="by-address">By Address</option>
                            <option value="by-phonenum">By Phone Number</option>
                            <option value="by-email">By Email Address</option>
                        </select>
                    </div>
                </div>

                <div className="dashboard_cards">
                    {newRequests.length === 0 ? (
                        <p>No new requests available.</p>
                    ) : (
                        newRequests.map((request, index) => (
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
                                        <div className="card-buttons">
                                            <button
                                                className="btn-1"
                                                onClick={() =>
                                                    handleConfirm(index)
                                                }
                                            >
                                                Confirm
                                            </button>
                                            <button
                                                className="btn-2"
                                                onClick={() =>
                                                    handleCancel(index)
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
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

export default NewRequests;
