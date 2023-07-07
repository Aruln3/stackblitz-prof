import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the corresponding CSS file for styling
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showArrow, setShowArrow] = useState(false); // State to track arrow visibility
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 190);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleContactClick = () => {
    setShowArrow(true); // Show the arrow when "Contact" is clicked
    window.scrollTo(0, document.body.scrollHeight);
    setTimeout(() => {
      setShowArrow(false); // Hide the arrow after 3 seconds
    }, 2460);
  };

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // const toggleIcon = isSidebarOpen ? faTimes : faBars;
  // const modeIcon = isDarkMode ? faMoon : faLightbulb;
  // const modeText = isDarkMode ? 'Dark' : 'Light';

  return (
    <>
      {/* <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`logo-container ${isScrolled ? 'show' : ''}`}>
          <div className="logo">Arul D</div>
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FontAwesomeIcon icon={faTimes} className="close-icon" />
          ) : (
            <FontAwesomeIcon icon={faBars} className="open-icon" />
          )}
        </button>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul> */}
            {/* <li onClick={() => (window.location.href = '/')}>Home</li> */}
            {/* <li onClick={handleContactClick}>Contact</li> */}
            {/* <li className="dark-mode-toggle" onClick={toggleDarkMode}>
              <FontAwesomeIcon icon={modeIcon} className="mode-icon" />
              <span>{modeText}</span>
            </li> */}
          {/* </ul>
        </div>
      </header>
      {showArrow && (
        <div className="arrow-container">
          <img
            src="https://genipluskids.com/wp-content/uploads/2021/11/Arrows-3-pointing-down-arrow-down-animated.gif"
            alt="Arrow"
            className="arrow-gif"
          />
        </div>
      )} */}
      
      {isScrolled && (

      <div data-testid="TopBar" id="TopBar" className="top-bar-container">
      <button>
        <div className="profile-picture-container logo">
          <img
            src="https://i.postimg.cc/3xwZNCwQ/gray.png"
            alt=""
            role="presentation"
            data-testid="TopBar-ProfileImage"
            filter="none"
            className="profile-picture"
          /> 
        <h3 className="logo1">Arul‎‎ D</h3></div> 
      </button>
      <div className="follow-button-container">
        <div className="follow-button">
          <button
            data-testid="FollowButton"
            className="follow-button-style"
            id="follow-button-style"
            onClick={handleContactClick}
          >
            <div className="follow-button-content">
              <h4>Contact</h4>
            </div>
          </button>
        </div>
      </div>
    </div>
    )}
      <div className="follow-button-container-fixed">
        <div className="follow-button">
          <button
            data-testid="FollowButton"
            className="follow-button-style"
            id="follow-button-style"
            onClick={handleContactClick}
          >
            <div className="follow-button-content">
              <h4>Contact</h4>
            </div>
          </button>
        </div>
      </div>

    {showArrow && (
        <div className="arrow-container">
          <img
            src="https://genipluskids.com/wp-content/uploads/2021/11/Arrows-3-pointing-down-arrow-down-animated.gif"
            alt="Arrow"
            className="arrow-gif"
          />
        </div>
      )}
    </>
  );
};

export default Header;
