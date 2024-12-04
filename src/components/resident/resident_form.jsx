import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/resident_form.css";

function ResidentForm() {
    const [request, setRequest] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        address: "",
        date: new Date(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Verify Address

        let requests = [];

        // FIXME: works but there should be a more concise way
        // also this shouldn't parse all requests before saving
        if (localStorage.requests) {
            requests = [...JSON.parse(localStorage.requests), request];
        } else {
            requests = [request];
        }

        localStorage.requests = JSON.stringify(requests);
    };

    // NOTE: maybe add a regex check for email and phone?
    // NOTE: maybe select uses an index rather than the time as the value?
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="residentInfo">
                    <p className="formTitle">Schedule a Visit</p>
                    <div className="formItem">
                        <label htmlFor="nameInput">Full Name</label>
                        <input
                            type="text"
                            id="nameInput"
                            name="name"
                            value={request.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formItem">
                        <label htmlFor="emailInput">Email</label>
                        <input
                            type="text"
                            id="emailInput"
                            name="email"
                            value={request.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formItem">
                        <label htmlFor="phoneInput">Phone Number</label>
                        <input
                            type="text"
                            id="phoneInput"
                            name="phoneNumber"
                            value={request.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formItem">
                        <label htmlFor="addressInput">Address</label>
                        <input
                            type="text"
                            id="addressInput"
                            name="address"
                            value={request.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="dateInfo">
                    <div className="formItem">
                        <label htmlFor="dateInput">
                            Select Appointment Date/Time
                        </label>
                        <Calendar
                            showTimeSelect
                            id="dateInput"
                            value={request.date}
                            onChange={(value, event) =>
                                setRequest({ ...request, date: value })
                            }
                            required
                        />
                    </div>
                    <div className="formItem">
                        <label htmlFor="timeslot">Select Timeslot</label>
                        <select
                            type="text"
                            id="timeslot"
                            name="timeslot"
                            value={request.timeslot}
                            onChange={handleChange}
                            required
                        >
                            <option value="8">8am</option>
                            <option value="9">9am</option>
                            <option value="10">10am</option>
                            <option value="11">11am</option>
                            <option value="12">12pm</option>
                            <option value="1">1pm</option>
                            <option value="2">2pm</option>
                            <option value="3">3pm</option>
                            <option value="4">4pm</option>
                        </select>
                    </div>
                    <p className="timeDisclaimer">
                        Preferred timeslots are indicative. Residents will
                        receive a confirmation a few hours before the scheduled
                        visit.
                    </p>
                    <button type="submit">Request Appointment</button>
                </div>
            </form>
        </>
    );
}

export default ResidentForm;
