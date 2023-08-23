import "./Popup.css";
import { useState } from 'react';

function Popup() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <>
            <div className="center-align">
                <button className="viewpopup" onClick={togglePopup}>VIEW POP-UP</button>
            </div>

            {showPopup && (
                <>
                    <div className="popup">
                        <div className="popup-inner">
                            <button className="closeX" onClick={togglePopup}>x</button>
                            <p>Are you sure you want to delete this element?</p>
                            <div className="inner__btns">
                                <button onClick={togglePopup}>YES</button>
                                <button onClick={togglePopup}>NO</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Popup;