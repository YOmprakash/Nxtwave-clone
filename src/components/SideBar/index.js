import React from 'react'
import { FaSearch,FaCode } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { MdHome ,MdTaskAlt} from "react-icons/md";
import { BsGift ,BsPersonRaisedHand} from "react-icons/bs";
import { IoMdBookmarks } from "react-icons/io";
import { GoCommentDiscussion } from "react-icons/go";
import { FaGreaterThan } from "react-icons/fa6";
import { GiJourney } from "react-icons/gi";
import { IoBook } from "react-icons/io5";
import WorkIcon from '@mui/icons-material/Work';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import TerminalIcon from '@mui/icons-material/Terminal';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import './index.css'

function SideBar() {
  return (
    <div className='sideBar'>
      <div>
     <img src='https://media.licdn.com/dms/image/C5616AQFlgNBpFosD4Q/profile-displaybackgroundimage-shrink_200_800/0/1640886064545?e=2147483647&v=beta&t=_ooRQ5bebEVuMkT8HTMXZ_1LgaQxdLuMHnSaFWluUvA'
     alt='logo' />
     <div className='search-container'>
     
     <FaSearch className='search-icon' size={24} />
     
    
        <input type='search' placeholder='search for arrays'/>
        
     </div>
        <div className='tab-scroll-container'>
        <ul className='tab-ul-container'>
            <li>
            <MdHome className='tab-icon'/>
                <a href='#home'>Home</a>
            </li>
            <li>
            <GiJourney className='tab-icon'/>
                <a href='#'>My Journey</a>
            </li>
            <li>
            <IoBook className='tab-icon'/>
                <a href='#'>Other courses</a>
            </li>
            <li>
            <IoMdBookmarks className='tab-icon'/>
                <a href='#'>Bookmarks</a>
            </li>
            <li>
            <GoCommentDiscussion className='tab-icon'/>
                <a href='#'>Discussion</a>
            </li>
            <li>
            <VolunteerActivismIcon  className='tab-icon'/>
                <a href='#'>Placement Prep...</a>
            </li>
            <li>
            <WorkIcon className='tab-icon'/>
                <a href='#'>Jobs</a>
            </li>
            <li>
            <TerminalIcon className='tab-icon'/>
                <a href='#'>PlayGround</a>
            </li>
            <li>
            <FaCode className='tab-icon'/>
                <a href='#'>Code Snippets</a>
            </li>

            <span className='apps'>Apps</span>
            <li>
            <NotificationsIcon className='tab-icon'/>
                <a href='#'>Announcements</a>
            </li>
            <li> 
            <MdTaskAlt className='tab-icon'/>
                <a href='#'>
                Taskflow</a>
                <RiShareBoxLine  className='share-icon'/>
            </li>
            <li><BsGift className='tab-icon'/>
                <a href='#'>Invite and Earn </a>
                <RiShareBoxLine  className='share-icon'/>
            </li>
            <li>
            <PersonAddAltIcon className='tab-icon'/>
                <a href='#'>My TA Portfolio</a>
                <RiShareBoxLine  className='share-icon'/>
            </li>
            <li>
            <BsPersonRaisedHand className='tab-icon'/>
                <a href='#'>Resolve doubts </a>
                <RiShareBoxLine  className='share-icon'/>
            </li>
        </ul>
        
        </div>
    
      </div>
    </div>
  )
}

export default SideBar
