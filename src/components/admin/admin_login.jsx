import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserIcon } from "@heroicons/react/24/solid";
import solarPhoto from "/images/desktop_stockphoto.jpg";
import sunLogo from "/images/sun_logo.png";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/adminpage");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="admin-log-in" >
            <header className="rl-header">
                <div className="header-elements">
                    <img src={sunLogo} className="sunlogo" alt="" />
                    <h1 className="rl-h1">SOLAR PLEXUS</h1>
                </div>
            </header>
            <div className="admin-login-elements">
                <div className="admin-img-container">
                    <img src={solarPhoto} className="solar-photo" alt="" />
                </div>

                <div className="login-container">
                    <div className="admin-welcome">
                        <h1 className="admin-lg-h1">Welcome!</h1>
                        <div className="admin-border"></div>
                    </div>
                    <div className="login">
                        <div className="login-content">
                            <div className="login-title">
                                <h2 className="admin-lg-h2">
                                    Admin<span className="accent">Login</span>
                                </h2>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="login-form"
                            >
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email"
                                    aria-label="Your Email"
                                    autoComplete="email"
                                />

                                <div className="password-input-wrapper">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        required
                                        placeholder="Password"
                                        aria-label="Your Password"
                                        autoComplete="current-password"
                                        className="password-input"
                                    />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="eye-icon"
                                    >
                                        {showPassword ? (
                                            <FaEyeSlash />
                                        ) : (
                                            <FaEye />
                                        )}
                                    </button>
                                </div>

                                <div className="login-btns">
                                    <button
                                        type="submit"
                                        className="btn"
                                    >
                                        <span>Log In</span>
                                        <UserIcon width={20} />
                                    </button>
                                </div>
                                <div className="admin-blue-border hidden"></div>
                                {error && (
                                    <p className="error-message">{error}</p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="rl-footer">
            </footer>
        </div>
    );
};

export default AdminLogin;
