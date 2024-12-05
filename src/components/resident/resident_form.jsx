import React, { useEffect, useState } from "react";
import solarimage from "../../components/images/solarhouse.jpeg"

function ResidentForm() {
    const [newUserName, setNewUserName] = useState("");
    const [newUserPhoneAreaCode, setNewUserPhoneAreaCode] = useState("");
    const [newUserPhonePrefix, setNewUserPhonePrefix] = useState("");
    const [newUserPhoneoLocalx, setNewUserPhoneLocalx] = useState("");
    const [newUserEmail, setNewUserEmail] = useState("");
    const [newUserAddress1, setNewUserAddress1] = useState("");
    const [newUserAddress2, setNewUserAddress2] = useState("");
    const [newUserCity, setNewUserCity] = useState("");
    const [newUserStateLocal, setNewUserStateLocal] = useState("");
    const [newUserZipCode, setNewUserZipCode] = useState("");

    const [userProfile, setuserProfile] = useState(() => {
        const savedUser = localStorage.getItem("userProfile");
        return savedUser ? JSON.parse(savedUser) : [];
    });

    useEffect(() => {
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
    }, [userProfile]);

    const handleSubmit = () => {
        if (
            newUserName &&
            newUserPhoneAreaCode &&
            newUserPhonePrefix &&
            newUserPhoneoLocalx &&
            newUserEmail &&
            newUserAddress1 &&
            newUserAddress2 &&
            newUserCity &&
            newUserStateLocal &&
            newUserZipCode
        ) {
            const newUser = {
                contact: {
                    name: newUserName,
                    email: newUserEmail,
                    phone: [
                        newUserPhoneAreaCode,
                        newUserPhonePrefix,
                        newUserPhoneoLocalx,
                    ],
                },

                address: {
                    address_line_1: newUserAddress1,
                    address_line_2: newUserAddress2,
                    city: newUserCity,
                    state: newUserStateLocal,
                    zipcode: newUserZipCode,
                },
            };
            setuserProfile([...userProfile, newUser]);
            setNewUserName("");
            setNewUserPhoneAreaCode("");
            setNewUserPhonePrefix("");
            setNewUserPhoneLocalx("");
            setNewUserEmail("");
            setNewUserAddress1("");
            setNewUserAddress2("");
            setNewUserCity("");
            setNewUserStateLocal("");
            setNewUserZipCode("");
        }
    };

    return (
        <div className="resident-container"> 
            <div className="resident-image">
                <img className="solar-img " src={solarimage} alt="car-logo" />
            </div>

            <div className="resident-form">
                <p>Submit your residential information here</p>
                <div className="divider"></div>
                <h3>Contact Information</h3>
                <form>
                    <div className="resident_contact">
                        <div className="input-labels">
                            <label>Name</label>
                            <label>Phone</label>
                            <label>Email</label>
                        </div>

                        <div className="input-areas">
                            <div className="resident_name">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter full name"
                                    value={newUserName}
                                    onChange={(e) => setNewUserName(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="resident_phone-number">
                                <input
                                    className="area-code"
                                    type="tel"
                                    id="area-code"
                                    name="phone"
                                    inputMode="tel"
                                    placeholder="555"
                                    maxLength={3}
                                    minLength={3}
                                    max={999}
                                    value={newUserPhoneAreaCode}
                                    onChange={(e) =>
                                        setNewUserPhoneAreaCode(e.target.value)
                                    }
                                    required
                                />
                                -
                                <input
                                    className="prefix"
                                    type="tel"
                                    id="prefix"
                                    name="phone"
                                    inputMode="tel"
                                    placeholder="555"
                                    maxLength={3}
                                    minLength={3}
                                    max={999}
                                    value={newUserPhonePrefix}
                                    onChange={(e) =>
                                        setNewUserPhonePrefix(e.target.value)
                                    }
                                    required
                                />
                                -
                                <input
                                    className="local-exchange"
                                    type="tel"
                                    id="local-exchange"
                                    name="phone"
                                    inputMode="tel"
                                    placeholder="5555"
                                    maxLength={4}
                                    minLength={4}
                                    value={newUserPhoneoLocalx}
                                    onChange={(e) =>
                                        setNewUserPhoneLocalx(e.target.value)
                                    }
                                    required
                                />
                            </div>
                            <div className="resident_email">
                                <input
                                    type="email"
                                    name="email"
                                    inputMode="email"
                                    placeholder="email@email.com"
                                    value={newUserEmail}
                                    onChange={(e) =>
                                        setNewUserEmail(e.target.value)
                                    }
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <h3>Address information</h3>
                    <div className="resident_address">
                        <div className="input-labels">
                            <label>Address Line 1</label>
                            <label>Address Line 2</label>
                            <label>City</label>
                            <label>State</label>
                            <label>ZIP Code </label>
                        </div>

                        <div className="input-areas">
                            <input
                                type="text"
                                name="addressln1"
                                placeholder="Name of street"
                                value={newUserAddress1}
                                onChange={(e) => setNewUserAddress1(e.target.value)}
                                required
                            />
                            <input
                                type="addressln2"
                                name="level"
                                placeholder="Apt, suite, floor, etc"
                                value={newUserAddress2}
                                onChange={(e) => setNewUserAddress2(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder="Name of city"
                                value={newUserCity}
                                onChange={(e) => setNewUserCity(e.target.value)}
                                required
                            />
                            <input
                                type=""
                                name="state"
                                placeholder="Name of state"
                                value={newUserStateLocal}
                                onChange={(e) =>
                                    setNewUserStateLocal(e.target.value)
                                }
                                required
                            />
                            <input
                                type="text"
                                name="zipcode"
                                placeholder="Enter your zipcode"
                                value={newUserZipCode}
                                onChange={(e) => setNewUserZipCode(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                </form>
                <button className="resident_form-btn" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default ResidentForm;

