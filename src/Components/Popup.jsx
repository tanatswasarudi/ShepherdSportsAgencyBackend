import React, { useState, useEffect } from 'react';
import popupmessage from './assets/pic.jpg'
const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Trigger the popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);
  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className={`popup fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-300 p-6 z-10 ${showPopup ? 'block' : 'hidden'}`}>
      <div className="md:h-[800px] h-[400px] md:w-[800px] w-[400px]">
        <img src={popupmessage} onClick={handleClose} alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Popup;
