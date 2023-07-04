import React, { useState, useEffect } from 'react';
import './Header.css'; // Import the corresponding CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showArrow, setShowArrow] = useState(false); // State to track arrow visibility

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
    }, 3000);
  };

  return (
    <>
      <header className={`header ${isSidebarOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}>
        <div className={`logo-container ${isScrolled ? 'show' : ''}`}>
          <div className="logo">Arul D</div>
        </div>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          {isSidebarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <ul>
            <li onClick={() => (window.location.href = '/home')}>Home</li>
            <li onClick={() => (window.location.href = '/about')}>About</li>
            <li onClick={handleContactClick}>Contact</li>
          </ul>
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
      )}
    </>
  );
};

export default Header;
