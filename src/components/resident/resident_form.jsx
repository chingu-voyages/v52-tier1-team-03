import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/resident_form.css";
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

    const [showPopupConfirm, setShowPopupConfirm] = useState(false);
    const navigate = useNavigate();

    const zipCodes = [
        90011, 90650, 91331, 90044, 90201, 90250, 90805, 90280, 91342, 91744,
        93550, 90706, 93535, 91335, 93536, 91706, 90003, 90255, 91766, 90631,
        90026, 91402, 90262, 90037, 90022, 90731, 91343, 90001, 90640, 90660,
        90019, 91702, 90004, 91770, 90042, 91732, 90006, 90066, 90813, 90744,
        91406, 93551, 90745, 91344, 90002, 91745, 91304, 91801, 91405, 90221,
        90047, 90723, 91605, 90063, 90034, 90018, 91767, 90703, 90046, 90638,
        91306, 90220, 90065, 90023, 90057, 90033, 91789, 91352, 90027, 92821,
        91790, 90032, 90247, 90242, 90025, 91367, 90043, 93534, 90241, 90016,
        90503, 91733, 91748, 91765, 90024, 91311, 90007, 90806, 90059, 90815,
        90501, 93552, 90278, 90605, 90275, 91016, 91401, 91606, 91387, 91350,
        90810, 90604, 90045, 90808, 90301, 91355, 91321, 90802, 91776, 90505,
        90804, 90012, 90036, 90031, 91711, 91104, 90277, 91205, 91001, 90020,
        91325, 90266, 90049, 91601, 91326, 91780, 90062, 90260, 91340, 91722,
        91006, 90222, 91754, 91768, 90230, 90008, 91773, 90504, 91107, 91750,
        91007, 90601, 91791, 90712, 90807, 90029, 91505, 91351, 90606, 91214,
        91423, 91607, 91724, 91206, 91604, 90803, 91792, 91324, 91303, 91731,
        90005, 90061, 90028, 91356, 91354, 91803, 90041, 91316, 90713, 90302,
        90039, 90710, 91746, 90405, 90304, 90038, 91740, 91010, 90017, 91755,
        91030, 91741, 90035, 91103, 91302, 91042, 90064, 91364, 91504, 90746,
        90249, 90291, 90274, 91301, 90270, 90015, 91307, 90240, 90602, 91384,
        91403, 90303, 91411, 90185, 91390, 91775, 90404, 90292, 91106, 90403,
        91201, 90717, 90272, 91040, 91011, 91202, 90068, 90069, 90715, 90732,
        90603, 91101, 90845, 90670, 91497, 91602, 90254, 90048, 91388, 90265,
        90210, 90502, 90814, 90174, 91506, 91501, 91203, 91361, 91345, 91204,
        91723, 90245, 91381, 90701, 90097, 90232, 91436, 91841, 90313, 91502,
        91208, 90248, 91105, 90716, 90305, 91108, 90013, 90293, 91207, 90755,
        90040, 90402, 90398, 90010, 90212, 93543, 91024, 91799, 90659, 90397,
        91399, 90102, 90665, 90094, 90077, 90401, 90211, 91312, 90056, 91187,
        90888, 93591, 91020, 91175, 90014, 93510, 90290, 90095, 90612, 91131,
        91191, 90058, 93532, 90021, 90704, 92397, 91186, 90089, 93553, 93544,
        90067, 90071, 93243, 91330, 91008, 91210, 90822, 91759, 90506, 93563,
        90840, 91608, 90090, 90831, 90073, 91188, 91795, 91797, 90101, 90103,
        90835, 90834, 90899, 90510, 93539, 93599, 90009, 90747, 90844, 90263,
        91383, 91409, 90233, 93584, 93590, 93586, 90030, 90050, 90052, 90051,
        90054, 90053, 90055, 90060, 90070, 90072, 90295, 90294, 90296, 90307,
        90306, 90309, 90308, 90311, 90310, 90312, 90406, 90408, 90407, 90410,
        90409, 90411, 90507, 90509, 90508, 90607, 90609, 90608, 90610, 90637,
        90639, 90652, 90651, 90662, 90661, 90671, 90702, 90707, 90711, 90714,
        90733, 90734, 90749, 90748, 90801, 90809, 90833, 90832, 90842, 90847,
        90846, 90853, 90848, 90895, 90074, 90076, 90075, 90078, 90080, 90079,
        90082, 90081, 90084, 90083, 90087, 90086, 90088, 90093, 90091, 90096,
        90099, 90189, 90209, 90202, 90213, 90223, 90224, 90231, 90239, 90251,
        90261, 90264, 90267, 91003, 91009, 91012, 91017, 91023, 91021, 91025,
        91031, 91041, 91043, 91066, 91046, 91077, 91102, 91109, 91114, 91110,
        91116, 91115, 91118, 91117, 91123, 91121, 91125, 91124, 91129, 91126,
        91184, 91182, 91185, 91189, 91209, 91221, 91224, 91734, 91735, 91747,
        91749, 91756, 91769, 91771, 91772, 91778, 91788, 91793, 91802, 91804,
        91899, 91896, 91222, 91226, 91225, 91305, 91308, 91310, 91309, 91313,
        91322, 91327, 91329, 91328, 91334, 91333, 91337, 91341, 91346, 91353,
        91357, 91365, 91372, 91371, 91376, 91380, 91382, 91385, 91386, 91393
      ];
      

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const validateAddress = () => {
        const zipCodeInput = Number(request.zipcode.trim());
    
        const isZipCodeValid = zipCodes.includes(zipCodeInput);
        console.log("ZIP Code Valid:", isZipCodeValid);
        return isZipCodeValid;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateAddress()) {
            alert("Invalid address. Please provide a valid Los Angeles address.");
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






















// import { useState, useEffect } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// import "../../styles/resident_form.css";
// import Papa from "papaparse";
// import { useNavigate } from "react-router-dom";

// function ResidentForm() {
//     const [request, setRequest] = useState({
//         name: "",
//         email: "",
//         phoneNumber: "",
//         street: "",
//         city: "Los Angeles",
//         state: "California",
//         zipcode: "",
//         date: new Date(),
//         timeslot: "8",
//     });

//     const [addressDataset, setAddressDataset] = useState([]);
//     const [showPopupConfirm, setShowPopupConfirm] = useState(false);
//     const navigate = useNavigate();

    

//     useEffect(() => {
//         fetch(
//             "https://data.lacity.org/api/views/4ca8-mxuh/rows.csv?accessType=DOWNLOAD"
//         )
//             .then((response) => response.text())
//             .then((csvData) => {
//                 Papa.parse(csvData, {
//                     header: true, 
//                     skipEmptyLines: true,
//                     complete: (results) => {
//                         setAddressDataset(results.data); 
//                     },
//                 });
//             })
//             .catch((error) =>
//                 console.error("Error fetching address dataset:", error)
//             );
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setRequest((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const cleanInput = (input) =>
//         input
//             .replace(/[^a-zA-Z0-9 ]/g, "")
//             .trim()
//             .toLowerCase();


//     const validateAddress = () => {
//         const [houseNumber, ...streetParts] = request.street.split(" ");
//         const streetName = streetParts.slice(0, -1).join(" "); 
//         const streetSuffix = streetParts.slice(-1)[0];


//         console.log(
//             "User Input:",
//             houseNumber,
//             streetName,
//             streetSuffix,
//             request.zipcode
//         );

//         const isAddressValid = addressDataset.some((entry) => {
//             console.log(
//                 "Dataset Entry:",
//                 entry.HSE_NBR,
//                 entry.STR_NM,
//                 entry.STR_SFX_CD,
//                 entry.ZIP_CD
//             );

//             return (
//                 cleanInput(entry.HSE_NBR) === cleanInput(houseNumber) &&
//                 cleanInput(entry.STR_NM) === cleanInput(streetName) &&
//                 cleanInput(entry.STR_SFX_CD) === cleanInput(streetSuffix) &&
//                 cleanInput(entry.ZIP_CD) === cleanInput(request.zipcode)
//             );
//         });

//         console.log("Address Valid:", isAddressValid);
//         return isAddressValid;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!validateAddress()) {
//             alert(
//                 "Invalid address. Please provide a valid Los Angeles address."
//             );
//             return;
//         }

//         const requests = JSON.parse(localStorage.getItem("requests")) || [];
//         requests.push(request);
//         localStorage.setItem("requests", JSON.stringify(requests));

//         setShowPopupConfirm(true);

//         setTimeout(() => {
//             navigate("/confirmation");
//         }, 3000);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <div className="residentInfo">
//                     <p className="formTitle">Schedule a Visit</p>
//                     <div className="formItem">
//                         <label htmlFor="nameInput">Full Name</label>
//                         <input
//                             type="text"
//                             id="nameInput"
//                             name="name"
//                             value={request.name}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="formItem">
//                         <label htmlFor="emailInput">Email</label>
//                         <input
//                             type="email"
//                             id="emailInput"
//                             name="email"
//                             value={request.email}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="formItem">
//                         <label htmlFor="phoneInput">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="phoneInput"
//                             name="phoneNumber"
//                             value={request.phoneNumber}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="formItem">
//                         <label htmlFor="streetInput">Street Address</label>
//                         <input
//                             type="text"
//                             id="streetInput"
//                             name="street"
//                             placeholder="Enter Street Address (e.g., 123 Main St)"
//                             value={request.street}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="formItem">
//                         <label htmlFor="cityInput">City</label>
//                         <select
//                             id="cityInput"
//                             name="city"
//                             value={request.city}
//                             onChange={handleChange}
//                             required
//                         >
//                             <option value="Los Angeles">Los Angeles</option>
//                         </select>
//                     </div>
//                     <div className="formItem">
//                         <label htmlFor="stateInput">State</label>
//                         <select
//                             id="stateInput"
//                             name="state"
//                             value={request.state}
//                             onChange={handleChange}
//                             required
//                         >
//                             <option value="California">California</option>
//                         </select>
//                     </div>
//                     <div className="formItem">
//                         <label htmlFor="zipCodeInput">ZIP Code</label>
//                         <input
//                             type="text"
//                             id="zipCodeInput"
//                             name="zipcode"
//                             value={request.zipcode}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                 </div>

//                 <div className="dateInfo">
//                     <div className="formItem">
//                         <label htmlFor="dateInput">
//                             Select Appointment Date/Time
//                         </label>
//                         <Calendar
//                             id="dateInput"
//                             value={request.date}
//                             onChange={(value) =>
//                                 setRequest((prevState) => ({
//                                     ...prevState,
//                                     date: value,
//                                 }))
//                             }
//                             required
//                         />
//                     </div>
//                     <div className="formItem">
//                         <label htmlFor="timeslot">Select Timeslot</label>
//                         <select
//                             id="timeslot"
//                             name="timeslot"
//                             value={request.timeslot}
//                             onChange={handleChange}
//                             required
//                         >
//                             <option value="8">8am</option>
//                             <option value="9">9am</option>
//                             <option value="10">10am</option>
//                             <option value="11">11am</option>
//                             <option value="12">12pm</option>
//                             <option value="1">1pm</option>
//                             <option value="2">2pm</option>
//                             <option value="3">3pm</option>
//                             <option value="4">4pm</option>
//                         </select>
//                     </div>
//                     <p className="timeDisclaimer">
//                         Preferred timeslots are indicative. Residents will
//                         receive a confirmation a few hours before the scheduled
//                         visit.
//                     </p>
//                     <button type="submit">Request Appointment</button>
//                 </div>

//                 {showPopupConfirm && (
//                     <div className="popup-confirm">
//                         <p>Request submitted successfully!</p>
//                     </div>
//                 )}
//             </form>
//         </>
//     );
// }

// export default ResidentForm;
