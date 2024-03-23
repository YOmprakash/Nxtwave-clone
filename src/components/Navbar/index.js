import {useState} from 'react'
import { IoMdMenu } from "react-icons/io";
import './index.css'

function Navbar() {
    const[menu,setMenu] = useState(false)
    

  return (
    <nav>
    <div>
        <img src='https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg' alt='logo' className='logo'/>
       
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Programs</a></li>
            <li><a href='#'>Reviews</a></li>
            <li><a href='#'>Hire With Us</a></li>
            <li>
            <a href='#login'>Login</a>
            </li>
        </ul>
<div className='menu'>
<IoMdMenu/>
</div>
<div className={`nav-sm ${menu ? 'nav-active':""}`}>
    <ul>
    <li><a href='#'>Home</a></li>
            <li><a href='#'>Programs</a></li>
            <li><a href='#'>Reviews</a></li>
            <li><a href='#'>Hire With Us</a></li>
            <li>
            <a href='#login'>Login</a>
            </li>
    </ul>
</div>
    </div>      
    </nav>
  )
}

export default Navbar
