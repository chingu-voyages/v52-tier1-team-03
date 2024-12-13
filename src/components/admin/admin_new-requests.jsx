import React from 'react';

const NewRequests = () => {
  return (
    <div className='admin_new-requests'>
        <div className="admin_new-requests-content">
          <div className="sectionHeader_desktop">
            <h2>New Appointment Requests</h2>
            <hr className="divider" />
            <div className='new_requests-dropdown'>
                <label htmlFor="sortbymenu">Sort By</label>
                <select
                  id="sortby"
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
                    <div className="dashboard_card">
                        <div className="card-top-border"></div>

                        <h3>RESIDENT_NAME</h3>
                        
                        <div className="card_content-wrapper">
                            <div className="card-content">
                              <p>prefered_timeslot</p>
                              <p>### street_name zip</p>
                              <p>(123)455-7890</p>
                              <p>address@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default NewRequests;