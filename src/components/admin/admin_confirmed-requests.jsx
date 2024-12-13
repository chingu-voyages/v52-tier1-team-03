import React, { useState, useEffect } from 'react';
import "../../styles/appointment-req.css";

const ConfirmedRequests = () => {
  const [confirmedRequests, setConfirmedRequests] = useState([]);
  const [sortOption, setSortOption] = useState('by-name');

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("requests"));
    
    if (storedRequests && Array.isArray(storedRequests)) {
      const filteredRequests = storedRequests.filter(request => request.status === "confirmed");
      setConfirmedRequests(filteredRequests);
    }
  }, []);

  const sortRequests = (requests) => {
    const sortedRequests = [...requests];
    switch (sortOption) {
      case 'by-name':
        return sortedRequests.sort((a, b) => a.name.localeCompare(b.name));
      case 'by-timeslot':
        return sortedRequests.sort((a, b) => a.timeslot - b.timeslot);
      case 'by-address':
        return sortedRequests.sort((a, b) => a.street.localeCompare(b.street));
      case 'by-phonenum':
        return sortedRequests.sort((a, b) => a.phoneNumber.localeCompare(b.phoneNumber));
      case 'by-email':
        return sortedRequests.sort((a, b) => a.email.localeCompare(b.email));
      default:
        return sortedRequests;
    }
  };

  useEffect(() => {
    setConfirmedRequests(prevRequests => sortRequests(prevRequests));
  }, [sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleComplete = (index) => {
    const updatedRequests = [...confirmedRequests];
    updatedRequests[index].status = 'completed'; 
    setConfirmedRequests(updatedRequests);

    const allRequests = JSON.parse(localStorage.getItem("requests"));
    allRequests.forEach((request, idx) => {
      if (request.name === updatedRequests[index].name && request.status === 'confirmed') {
        allRequests[idx].status = 'completed'; 
      }
    });

    localStorage.setItem('requests', JSON.stringify(allRequests));
  };

  const handlePrintAll = () => {
    let content = '<h2>Confirmed Appointment Requests</h2>';
    confirmedRequests.forEach((request) => {
      content += `
        <div>
          <h3>Name: ${request.name}</h3>
          <p>Timeslot: ${request.timeslot}</p>
          <p>Address: ${request.street}, ${request.zipcode}</p>
          <p>Phone: ${request.phoneNumber}</p>
          <p>Email: ${request.email}</p>
          <hr>
        </div>
      `;
    });

    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Print All Requests</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className='confirmed-requests'>
      <div className="admin_new-requests-content">
        <div className="sectionHeader_desktop">
          <h2>Confirmed Appointment Requests</h2>
          <hr className="divider" />
          <div className='new_requests-dropdown'>
            <label className='label-padding' htmlFor="sortby">Sort By:</label>
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
          {confirmedRequests.length === 0 ? (
            <p>No confirmed requests available.</p>
          ) : (
            confirmedRequests.map((request, index) => (
              <div key={index} className="dashboard_card">
                <div className="card-top-border"></div>
                <h3>{request.name}</h3>
                <div className="card_content-wrapper">
                  <div className="card-content">
                    <p>Preferred Timeslot: {request.timeslot}</p>
                    <p>{request.street}, {request.zipcode}</p>
                    <p>{request.phoneNumber}</p>
                    <p>{request.email}</p>
                    <div className="card-buttons">
                      <button onClick={() => handleComplete(index)}>Mark as Complete</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        <button className='print-btn' onClick={handlePrintAll}>Print All Confirmed Requests</button>

      </div>
    </div>
  );
};

export default ConfirmedRequests;
