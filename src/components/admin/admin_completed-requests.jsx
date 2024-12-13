import React, { useState, useEffect } from "react";
import "../../styles/appointment-req.css";

const CompletedRequests = () => {
  const [completedRequests, setCompletedRequests] = useState([]);
  const [sortOption, setSortOption] = useState("by-name");

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("requests"));
    if (storedRequests && Array.isArray(storedRequests)) {
      const filteredRequests = storedRequests.filter(
        (request) => request.status === "completed"
      );
      setCompletedRequests(filteredRequests);
    }
  }, []);

  useEffect(() => {
    const sortRequests = (requests) => {
      const sortedRequests = [...requests];
      switch (sortOption) {
        case "by-name":
          return sortedRequests.sort((a, b) => a.name.localeCompare(b.name));
        case "by-timeslot":
          return sortedRequests.sort((a, b) =>
            a.timeslot.localeCompare(b.timeslot)
          );
        case "by-address":
          return sortedRequests.sort((a, b) => a.street.localeCompare(b.street));
        case "by-phonenum":
          return sortedRequests.sort((a, b) =>
            a.phoneNumber.localeCompare(b.phoneNumber)
          );
        case "by-email":
          return sortedRequests.sort((a, b) => a.email.localeCompare(b.email));
        default:
          return sortedRequests;
      }
    };

    setCompletedRequests((prevRequests) => sortRequests(prevRequests));
  }, [sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="completed-requests">
      <div className="admin_new-requests-content">
        <div className="sectionHeader_desktop">
          <h2>Completed Appointment Requests</h2>
          <hr className="divider" />
          <div className="new_requests-dropdown">
            <label className="label-padding" htmlFor="sortby">Sort By:</label>
            <select id="sortby" value={sortOption} onChange={handleSortChange}>
              <option value="by-name">By Name</option>
              <option value="by-timeslot">By Timeslot</option>
              <option value="by-address">By Address</option>
              <option value="by-phonenum">By Phone Number</option>
              <option value="by-email">By Email Address</option>
            </select>
          </div>
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
                    <p>Preferred Timeslot: {request.timeslot}</p>
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
