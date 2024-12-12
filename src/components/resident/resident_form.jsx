import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/resident_form.css";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";

function ResidentForm() {
    const [request, setRequest] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        street: "",
        city: "Los Angeles",
        state: "California",
        zipcode: "",
        date: new Date(),
        timeslot: "8",
    });

    const [addressDataset, setAddressDataset] = useState([]);
    const [showPopupConfirm, setShowPopupConfirm] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            "https://data.lacity.org/api/views/4ca8-mxuh/rows.csv?accessType=DOWNLOAD"
        )
            .then((response) => response.text())
            .then((csvData) => {
                Papa.parse(csvData, {
                    header: true, 
                    skipEmptyLines: true,
                    complete: (results) => {
                        setAddressDataset(results.data); 
                    },
                });
            })
            .catch((error) =>
                console.error("Error fetching address dataset:", error)
            );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const cleanInput = (input) =>
        input
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .trim()
            .toLowerCase();


    const validateAddress = () => {
        const [houseNumber, ...streetParts] = request.street.split(" ");
        const streetName = streetParts.slice(0, -1).join(" "); 
        const streetSuffix = streetParts.slice(-1)[0];


        console.log(
            "User Input:",
            houseNumber,
            streetName,
            streetSuffix,
            request.zipcode
        );

        const isAddressValid = addressDataset.some((entry) => {
            console.log(
                "Dataset Entry:",
                entry.HSE_NBR,
                entry.STR_NM,
                entry.STR_SFX_CD,
                entry.ZIP_CD
            );

            return (
                cleanInput(entry.HSE_NBR) === cleanInput(houseNumber) &&
                cleanInput(entry.STR_NM) === cleanInput(streetName) &&
                cleanInput(entry.STR_SFX_CD) === cleanInput(streetSuffix) &&
                cleanInput(entry.ZIP_CD) === cleanInput(request.zipcode)
            );
        });

        console.log("Address Valid:", isAddressValid);
        return isAddressValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateAddress()) {
            alert(
                "Invalid address. Please provide a valid Los Angeles address."
            );
            return;
        }

        const requests = JSON.parse(localStorage.getItem("requests")) || [];
        requests.push(request);
        localStorage.setItem("requests", JSON.stringify(requests));

        setShowPopupConfirm(true);

        setTimeout(() => {
            navigate("/confirmation");
        }, 3000);
    };

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
                            type="email"
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
                            type="tel"
                            id="phoneInput"
                            name="phoneNumber"
                            value={request.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formItem">
                        <label htmlFor="streetInput">Street Address</label>
                        <input
                            type="text"
                            id="streetInput"
                            name="street"
                            placeholder="Enter Street Address (e.g., 123 Main St)"
                            value={request.street}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="formItem">
                        <label htmlFor="cityInput">City</label>
                        <select
                            id="cityInput"
                            name="city"
                            value={request.city}
                            onChange={handleChange}
                            required
                        >
                            <option value="Los Angeles">Los Angeles</option>
                        </select>
                    </div>
                    <div className="formItem">
                        <label htmlFor="stateInput">State</label>
                        <select
                            id="stateInput"
                            name="state"
                            value={request.state}
                            onChange={handleChange}
                            required
                        >
                            <option value="California">California</option>
                        </select>
                    </div>
                    <div className="formItem">
                        <label htmlFor="zipCodeInput">ZIP Code</label>
                        <input
                            type="text"
                            id="zipCodeInput"
                            name="zipcode"
                            value={request.zipcode}
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
                            id="dateInput"
                            value={request.date}
                            onChange={(value) =>
                                setRequest((prevState) => ({
                                    ...prevState,
                                    date: value,
                                }))
                            }
                            required
                        />
                    </div>
                    <div className="formItem">
                        <label htmlFor="timeslot">Select Timeslot</label>
                        <select
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

                {showPopupConfirm && (
                    <div className="popup-confirm">
                        <p>Request submitted successfully!</p>
                    </div>
                )}
            </form>
        </>
    );
}

export default ResidentForm;
