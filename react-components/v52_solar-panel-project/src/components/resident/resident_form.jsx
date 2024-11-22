import React from 'react';

function HandleFormSubmit() {
    
}


const ResidentForm = () => {
  return (
    <div className='resident-form'>
      <p>Submit your residential information here</p>
      <form>
        <div className='resident_contact'>
            <div className='input-labels'>
                <label>Name</label>
                <label>Phone</label>
                <label>Email</label>
            </div>

            <div className='input-areas'>
                <input 
                    type='text'
                    id='name'
                    placeholder='Enter full name'
                    required
                />
                <input 
                    type='tel'
                    id='phone'
                    placeholder='(xxx)xxx-xxxx'
                    required
                    />
                <input 
                    type='email'
                    id='email'
                    placeholder='email@email.com'
                    required
                />
            </div>
        </div>
        
        <div className='resident_address'>
            <div className='input-labels'>
                <label>Address Line 1</label>
                <label>Address Line 2</label>
                <label>City</label>
                <label>State</label>
                <label>ZIP Code </label>
            </div>
            
            <div className='input-areas'>
                <input
                    type='text'
                    id='addressln1'
                    required
                    placeholder='Name of street'
                />
                <input 
                    type='addressln2'
                    id='level'
                    placeholder='Apt, suite, floor, etc'
                />
                <input 
                    type='text'
                    id='city'
                    placeholder='Name of city'
                />
                <input 
                    type=''
                    id='state'
                    placeholder='Name of state'
                    required
                
                />
                <input 
                    type='text'
                    id='zipcode'
                    placeholder='Enter your zipcode'
                    required
                />
            </div>
        </div>
      </form>
      <button type='submit' onClick={}>Submit</button>
    </div>
  );
};

export default ResidentForm;