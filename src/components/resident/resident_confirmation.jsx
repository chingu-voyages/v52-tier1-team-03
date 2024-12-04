import "../../styles/resident_confirmation.css";

function Confirmation() {
    return (
        <div className="residentConfirmation">
            <h1>Thank You!</h1>
            <p>Your request for an appointment has been recieved.</p>
            <p>
                You will recieve confirmationa few hours before the scheduled
                visit.
            </p>
            <p>
                If you have any questions regarding your upcomming visit or to
                cancel, please call 1-800-123-4567.
            </p>
        </div>
    );
}

export default Confirmation;
