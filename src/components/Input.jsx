/* eslint-disable react/prop-types */
import { useRef, useState } from "react";


function Input({ saveDetails }) {
    const nameRef = useRef(null);
    const ageRef = useRef(null);

    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const age = ageRef.current.value;

        if (name.length === 0 || age.length === 0 || !/^[1-9]\d*$/.test(age)) {
            setPopupMessage("Please enter a valid name and a positive age.");
            setPopupVisible(true);
        } else {
            saveDetails(name, age);
            console.log(name, age);
            setPopupVisible(false); // Hide the pop-up if details are valid
        }
    };

    const closePopUp = () => {
        setPopupVisible(false);
    };

    return (
        <div>
            <form>
                <label htmlFor="username">Name</label>
                <input ref={nameRef} type="text" id="username" />
                <label htmlFor="age">Age</label>
                <input ref={ageRef} type="number" id="age" />
                <button onClick={handleClick}>ADD</button>
            </form>

            {/* PopUp */}
            {popupVisible && (
                <div className="popup">
                    <p>{popupMessage}</p>
                    <button onClick={closePopUp}>Close</button>
                </div>
            )}
        </div>
    );
}

export default Input;
