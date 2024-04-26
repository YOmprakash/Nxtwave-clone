import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import { FaArrowRightLong } from "react-icons/fa6";
import './index.css';

function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <header className="header">
      <div className="header__content">

        <a  href="/"> <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg' className='logo' alt='logo'/> </a>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">Home

</li>
            <li className="header__link-wrapper">Programs</li>
            <li className="header__link-wrapper">Reviews</li>
            <li className="header__link-wrapper">Hire with Us</li>
            <li className="header__link-wrapper"> <div className='login-container'>
<p>Login</p>
              <FaArrowRightLong className='login-icon' size={18} color='#0082f3' />
            </div></li>
          </ul>

          <div className="header__main-ham-menu-cont" onClick={hamburgerMenu}>
            <IoMdMenu size={24} color='#333' />
          </div>
        </div>
      </div>

      <div className={`header__sm-menu ${hamburger ? "header__sm-menu--active" : ""}`}>
        <div className="header__sm-menu-content">
          <ul className="header__sm-menu-links">
            <li className="header__sm-menu-link" onClick={hamburgerMenu}>
              Home
            </li>
            <li className="header__sm-menu-link" onClick={hamburgerMenu}>
            Programs
            </li>
            <li className="header__sm-menu-link" onClick={hamburgerMenu}>
            Reviews
            </li>
            <li className="header__sm-menu-link" onClick={hamburgerMenu}>
            Hire with Us
            
            </li>
            <li className="header__sm-menu-link" onClick={hamburgerMenu}><div className='login-container'>
<p>Login</p>
              <FaArrowRightLong className='login-icon' size={18} color='#0082f3' />
            </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
