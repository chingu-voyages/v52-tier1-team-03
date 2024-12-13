import "../../styles/residentlanding.css";
import sunLogo from "/images/sun_logo.png"
import solarPhoto from "/images/desktop_stockphoto.jpg"
import { Link } from 'react-router-dom';


function ResidentLanding() {
    return (
        <div className="resident-landing-page">
            <header className="rl-header">
                <div className="header-elements">
                    <img src={sunLogo}  className="sunlogo"  alt="" />
                    <h1 className="rl-h1">SOLAR PLEXIS</h1>
                </div>
            </header>
            <div className="rl-hero">
                <div className="rl-img-container">
                    <img src={solarPhoto} className="solar-photo " alt="" />
                </div>
                <div className="message">
                    <div className="welcome">
                        <h1>Welcome!</h1>
                        <div className="rl-border"></div>
                    </div>

                    <div className="button-container">
                    <Link to="/residentform">
                        <button className="schl-btn">Schedule a Visit</button>
                        <div className="blue-border hidden"></div>
                    </Link>
                    </div>

                </div>
            </div>

        

            <footer className="rl-footer">
            </footer>
        </div>
    
    );
}

export default ResidentLanding;