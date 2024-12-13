import React, { useState, useEffect } from 'react';

const NewRequests = () => {
  const [newRequests, setNewRequests] = useState([]);
  const [sortOption, setSortOption] = useState('by-name');

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("requests"));

    if (storedRequests && Array.isArray(storedRequests)) {
      const filteredRequests = storedRequests.filter(request => request.status === "new");
      setNewRequests(filteredRequests);
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
    setNewRequests(prevRequests => sortRequests(prevRequests));
  }, [sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleConfirm = (index) => {
    const updatedRequests = [...newRequests];
    const confirmedRequest = updatedRequests.splice(index, 1)[0]; 
    confirmedRequest.status = 'confirmed';
  
    setNewRequests(updatedRequests);
  
    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    storedRequests.push(confirmedRequest); 
    localStorage.setItem('requests', JSON.stringify(storedRequests));
  };
  

  const handleCancel = (index) => {
    const updatedRequests = [...newRequests];
    updatedRequests[index].status = 'cancelled'; 
    setNewRequests(updatedRequests);

    localStorage.setItem('requests', JSON.stringify(updatedRequests));
  };

  return (
    <div className='admin_new-requests'>
      <div className="admin_new-requests-content">
        <div className="sectionHeader_desktop">
          <h2>New Appointment Requests</h2>
          <hr className="divider" />
          <div className='new_requests-dropdown'>
            <label htmlFor="sortby">Sort By</label>
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
          {newRequests.length === 0 ? (
            <p>No new requests available.</p>
          ) : (
            newRequests.map((request, index) => (
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
                      <button onClick={() => handleConfirm(index)}>Confirm</button>
                      <button onClick={() => handleCancel(index)}>Cancel</button>
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
