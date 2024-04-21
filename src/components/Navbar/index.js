import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import './index.css';

function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    }

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <a href="/"> <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg' alt='logo' className='logo' />
                    </a>
                </div>
                <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    <ul className="navbar-links">
                        <li>
                            <a href="#home" onClick={() => setOpen(false)}>Home</a>
                        </li>
                        <li>
                            <a href="#about" onClick={() => setOpen(false)}>About</a>
                        </li>
                        <li>
                            <a href="#services" onClick={() => setOpen(false)}>Services</a>
                        </li>
                        <li>
                            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
                        </li>
                    </ul>
                </div>
                <button
                    type="button"
                    className="navbar-toggle"
                    onClick={toggleMenu}
                >
                    <IoMdMenu color='#000' size={24} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar;
