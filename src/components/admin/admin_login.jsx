import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../auth/firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserIcon } from "@heroicons/react/24/solid";

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
        <div className="login">
            <div className="login-content">
                <div className="login-title">
                    <h2>
                        Admin<span className="accent">Login</span>
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="login-form">
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
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    <div className="login-btns">
                        <button type="submit" className="btn btn--dark">
                            <span>Log In</span>
                            <UserIcon width={20} />
                        </button>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
